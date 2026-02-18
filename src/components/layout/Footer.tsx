import { getSiteConfig } from "@/lib/content";
import { SocialIcon } from "@/components/shared/SocialIcon";

export function Footer() {
  const config = getSiteConfig();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-foreground px-5 py-10 text-center text-sm text-background/70">
      <p className="font-semibold text-background leading-[1.6]">
        {config.brand.name}
      </p>
      <p className="mt-1 text-background/70 leading-[1.6]">
        &copy; {year} {config.siteName}. All rights reserved.
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {config.contact.email && (
          <a
            href={`mailto:${config.contact.email}`}
            className="text-background/70 underline-offset-2 transition-colors hover:text-background hover:underline"
          >
            {config.contact.email}
          </a>
        )}
        {config.sns.instagram && (
          <a
            href={config.sns.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/70 underline-offset-2 transition-colors hover:text-background hover:underline"
          >
            <SocialIcon type="instagram" />
            Instagram
          </a>
        )}
        {config.sns.blog && (
          <a
            href={config.sns.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/70 underline-offset-2 transition-colors hover:text-background hover:underline"
          >
            <SocialIcon type="blog" />
            Blog
          </a>
        )}
        {config.sns.kakao && (
          <a
            href={config.sns.kakao}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-background/70 underline-offset-2 transition-colors hover:text-background hover:underline"
          >
            <SocialIcon type="kakao" />
            Kakao
          </a>
        )}
      </div>
    </footer>
  );
}
