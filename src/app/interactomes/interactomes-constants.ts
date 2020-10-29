import {Interactome} from './interactome.model';

// ##  1: taxid:9606(human)|taxid:9606(Homo sapiens)
// ##  2: taxid:559292(yeast)|taxid:559292(Saccharomyces cerevisiae)
// ##  3: taxid:7227(drome)|taxid:7227("Drosophila melanogaster (Fruit fly)")
// ##  4: taxid:6239(caeel)|taxid:6239(Caenorhabditis elegans)
// ##  5: taxid:3702(arath)|taxid:3702("Arabidopsis thaliana (Mouse-ear cress)")
// ##  6: taxid:10090(mouse)|taxid:10090(Mus musculus)
// ##  7: taxid:83333(ecoli)|taxid:83333("Escherichia coli (strain K12)")
// ##  8: taxid:192222(camje)|taxid:192222("Campylobacter jejuni subsp. jejuni serotype O:2 (strain NCTC 11168)")
// ##  9: taxid:10116(rat)|taxid:10116("Rattus norvegicus (Rat)")
// ## 10: taxid:243276(trepa)|taxid:243276("Treponema pallidum (strain Nichols)")
// ## 11: taxid:1111708(syny3)|taxid:1111708("Synechocystis sp. (strain PCC 6803 / Kazusa)")
// ## 12: taxid:36329(plaf7)|taxid:36329("Plasmodium falciparum (isolate 3D7)")
// ## 13: taxid:85962(helpy)|taxid:85962(Helicobacter pylori)
// ## 14: taxid:284812(schpo)|taxid:284812("Schizosaccharomyces pombe (strain ATCC 38366 / 972)")
// ## 15: taxid:224308(bacsu)|taxid:224308(Bacillus subtilis)
// ## 16: taxid:882(desvh)|taxid:882("Desulfovibrio vulgaris (strain Hildenborough / ATCC 29579 / NCIMB 8303)")

export abstract class InteractomesConstants {
  static readonly interactomes: Interactome[] = [
    new Interactome('Homo sapiens', 'H', 'human', 'human', 9606),
    new Interactome('Saccharomyces cerevisiae', 'Y', 'yeast', 'yeast', 559292),
    new Interactome('Drosophila melanogaster (Fruit fly)', 'F', 'drome', 'drome', 7227),
    new Interactome('Caenorhabditis elegans', 'W', 'caeel', 'caeel', 6239),
    new Interactome('Arabidopsis thaliana (Mouse-ear cress)', 'B', 'arath', 'arath', 3702),
    new Interactome('Mus musculus', 'M', 'mouse', 'mouse', 10090),
    new Interactome('Escherichia coli (strain K12)', 'L', 'ecoli', 'ecoli', 83333),
    new Interactome('Campylobacter jejuni subsp. jejuni serotype O:2 (strain NCTC 11168)', 'L', 'camje', 'camje', 192222),
    new Interactome('Rattus norvegicus (Rat)', 'R', 'rat', 'rat', 10116),
    new Interactome('Treponema pallidum (strain Nichols)', 'L', 'trepa', 'trepa', 243276),
    new Interactome('Synechocystis sp. (strain PCC 6803 / Kazusa)', 'Y', 'syny3', 'syny3', 1111708),
    new Interactome('Plasmodium falciparum (isolate 3D7)', '@', 'plaf7', 'plaf7', 36329),
    new Interactome('Helicobacter pylori', 'L', 'helpy', 'helpy', 85962),
    new Interactome('Schizosaccharomyces pombe (strain ATCC 38366 / 972)', 'Y', 'schpo', 'schpo', 284812),
    new Interactome('Bacillus subtilis', 'L', 'bacsu', 'bacsu', 224308),
    new Interactome('Desulfovibrio vulgaris (strain Hildenborough / ATCC 29579 / NCIMB 8303)', 'L', 'desvh', 'desvh', 882),
  ];
}
