export class PubmedDataset {
  constructor(
    public readonly id: string,
    public readonly author: string,
    public readonly year: string,
    public readonly intactId?: string,
    public readonly intactYear?: string
  ) {
  }

  public static searchQuery(pubmed: PubmedDataset): string {
    return `pubid:${pubmed.intactId || pubmed.id}`;
  }

  public static searchTitle(pubmed: PubmedDataset): string {
    return `publication: ${pubmed.author} (${pubmed.id})`;
  }

  public static ftpFilePath(baseFtpUrl: string, pubmed: PubmedDataset, extension: string): string {
    return `${baseFtpUrl}/pmid/${pubmed.intactYear || pubmed.year}/${pubmed.intactId || pubmed.id}.${extension}`;
  }
}
