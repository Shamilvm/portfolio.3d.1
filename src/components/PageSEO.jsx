import { useEffect } from "react";
import { SITE_URL } from "../constants/seo";

const upsertMeta = (attr, key, content) => {
  if (!content) return;

  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;

  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const upsertJsonLd = (data) => {
  const scriptId = "page-jsonld";
  let script = document.getElementById(scriptId);

  if (!data) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

const PageSEO = ({ title, description, path, image, type = "website", jsonLd }) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    const ogType = type === "profile" ? "profile" : "website";

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", "Shamil Vm");
    upsertMeta("property", "og:locale", "en_US");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertJsonLd(jsonLd);
  }, [title, description, path, image, type, jsonLd]);

  return null;
};

export default PageSEO;
