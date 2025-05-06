import ogImage from "@/public/assets/acicts.png";
import favicon from "@/public/favicon.ico";

export default function Metadata({ title, url }) {
  const pageDescription = `Ananda College Society Management`;
  const pageTitle = `Ananda College Society Management`;
  const ogImageURL = ogImage.src;
  const pageURL = `${process.env.NEXTAUTH_URL}/${url}`;

  return (
    <>
      <title>{pageTitle}</title>
      <meta content={pageDescription} name="description" />
      <meta content={pageTitle} property="og:title" />
      <meta content={pageDescription} property="og:description" />
      <meta content={ogImageURL} property="og:image" />
      <meta content={pageURL} property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={pageTitle} name="twitter:title" />
      <meta content={pageDescription} name="twitter:description" />
      <meta content={ogImageURL} name="twitter:image" />
      <link href={pageURL} rel="canonical" />
      <link href={favicon.src} rel="icon" type="image/x-icon" />
      <link href={favicon.src} rel="apple-touch-icon" type="image/x-icon" />
      <meta content="Ananda College ICT Society" name="author" />
      <meta content="index, follow, noarchive, nosnippet" name="robots" />
      <meta name="google-site-verification" content="YisNZwsMDy1eDogPvwfwXAY731noCmkFCdWzcGvSbek" />
    </>
  );
}
