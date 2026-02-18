import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppData } from "@/hooks/useAppData";
import { SocialIcon } from "@/components/shared/SocialIcon";

export function FeedbackTab() {
  const { config, faq } = useAppData();
  const { feedbackForm, contact, sns } = config;

  return (
    <div className="px-4 py-10 md:px-5 md:py-16 reveal">
      <div className="mx-auto max-w-2xl">
        {/* Contact Channels */}
        <div className="rounded-3xl border bg-aurora px-4 py-6 text-center shadow-sm md:px-6 md:py-8">
          <h2 className="text-2xl font-bold leading-[1.3] tracking-tight md:text-3xl">
            피드백 & 문의
          </h2>
          <p className="mt-3 text-sm text-text-secondary leading-[1.7] whitespace-pre-line md:mt-4 md:text-base">
            {feedbackForm.description}
          </p>
        </div>

        <div className="mt-8 space-y-4 md:mt-10">
          <Card>
            <CardContent className="p-4 text-center md:p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
                문제집 신청하기
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-[1.7] md:text-base">
                구글 폼을 통한 문제집 신청
              </p>
              <Button
                asChild
                className="mt-4 min-h-[44px] w-full max-w-xs"
              >
                <a
                  href={feedbackForm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feedbackForm.buttonText}
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {sns.instagram && (
              <Card>
                <CardContent className="p-4 text-center md:p-6">
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold tracking-[-0.01em] md:text-xl">
                    <SocialIcon type="instagram" className="text-primary" />
                    <span>Instagram DM</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-[1.7] md:text-base">
                    빠른 문의는<br />인스타그램 DM으로
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 min-h-[44px] w-full"
                  >
                    <a
                      href={sns.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram 방문
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {contact.email && (
              <Card>
                <CardContent className="p-4 text-center md:p-6">
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold tracking-[-0.01em] md:text-xl">
                    <SocialIcon type="email" className="text-primary" />
                    <span>이메일 문의</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-[1.7] md:text-base">
                    상세한 문의는 이메일로
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 min-h-[44px] w-full text-xs md:text-sm"
                  >
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </Button>
                </CardContent>
              </Card>
            )}
            {sns.blog && (
              <Card>
                <CardContent className="p-4 text-center md:p-6">
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold tracking-[-0.01em] md:text-xl">
                    <SocialIcon type="blog" className="text-primary" />
                    <span>Blog</span>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-[1.7] md:text-base">
                    학습 자료와 정보는<br />블로그에서
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 min-h-[44px] w-full"
                  >
                    <a
                      href={sns.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blog 방문
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        {faq.items.length > 0 && (
          <div className="mt-12 md:mt-16">
            <h2 className="text-center text-2xl font-bold leading-[1.3] tracking-tight md:text-3xl">
              자주 묻는 질문
            </h2>
            <Accordion type="single" collapsible className="mt-6 md:mt-8">
              {faq.items.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-sm md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-text-secondary leading-[1.7] md:text-base">
                {item.answer}
              </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}
