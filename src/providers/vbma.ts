/**
 * Vietnam Bond Market Association — the weekly bond-market bulletin, published
 * as a PDF.
 *
 * This is the only free source for SBV interbank rates, government-bond yields
 * and the corporate-bond maturity wall. The bulletin runs to a dozen-plus pages,
 * so the caller ranks pages before anything reaches an LLM.
 */

import { fetchPdfPages, type PdfPage } from "../core/doc-extract.ts";
import { fetchListing, firstLink } from "./nso.ts";

export const VBMA_WEEKLY_LISTING = "https://vbma.org.vn/en/reports/weekly";
const VBMA_ORIGIN = "https://vbma.org.vn";

export const VBMA_SOURCE_NAME = "Vietnam Bond Market Association (VBMA)";

/** VBMA stores its bulletins under /storage/reports/<Month><Year>/<file>.pdf */
const VBMA_PDF_RE = /href="(\/storage\/reports\/[^"]+\.pdf)"/gi;

export interface VbmaBulletin {
  url: string;
  title: string;
  pages: PdfPage[];
}

/**
 * Resolve the latest bulletin from the listing page and extract its per-page
 * text. Throws when the listing has no PDF link or the PDF has no text layer.
 */
export async function fetchLatestBulletin(): Promise<VbmaBulletin> {
  const listing = await fetchListing(VBMA_WEEKLY_LISTING);
  const href = firstLink(listing, VBMA_PDF_RE);
  if (!href) throw new Error("no PDF link on weekly report page");
  // Report filenames contain spaces; `new URL` encodes the path but keeps slashes.
  const url = new URL(href, VBMA_ORIGIN).toString();

  // Titles sit in the <h4> immediately before each download link.
  const titleMatch = listing.match(/<h4[^>]*>\s*(Weekly Report[^<]*)<\/h4>/i);
  const title = (titleMatch?.[1] ?? "VBMA Weekly Bond Market Report").trim();

  const pages = await fetchPdfPages(url);
  if (pages.length === 0) throw new Error("PDF had no extractable text");

  return { url, title, pages };
}
