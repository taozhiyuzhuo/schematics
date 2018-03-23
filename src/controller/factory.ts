import { strings } from '@angular-devkit/core';
import { apply, chain, mergeWith, move, Rule, template, Tree, url } from '@angular-devkit/schematics';
import { ControllerOptions } from './schema';
import { ModuleMetadataUtils } from '../utils/module-metadata.utils';
import { ModuleImportUtils } from '../utils/module-import.utils';
import { ModuleOptions } from '../module/schema';
import { classify } from '@angular-devkit/core/src/utils/strings';

export function main(options: ControllerOptions): Rule {
  return chain([
    mergeWith(generate(options)),
    addDeclarationToModule(options)
  ]);
}

function generate(options: ControllerOptions) {
  return apply(
    url('./files'), [
      template({
        ...strings,
        ...options
      }),
      move('/src')
    ]
  );
}

function addDeclarationToModule(options: ModuleOptions): Rule {
  return (tree: Tree) => {
    const symbol: string = `${ classify(options.name) }Controller`;
    const relativePath: string = `./${ options.name }/${ options.name }.controller`;
    let content = tree.read('/src/app.module.ts').toString();
    content = ModuleImportUtils.insert(content, symbol, relativePath);
    content = ModuleMetadataUtils.insert(content, symbol);
    tree.overwrite('/src/app.module.ts', content);
    return tree;
  };
}
