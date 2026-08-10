import { FAQS, SERVICES, SITE, SITE_URL } from "@/lib/site";

/**
 * /llms.txt — a plain-text brief for AI assistants and answer engines that
 * would otherwise have to infer this business from rendered markup. Generated
 * from lib/site so it can never contradict the page.
 */
export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.shortDescription}

${SITE.description}

## Key facts

- Name: ${SITE.name} (${SITE.legalName})
- ${SITE.founder.role}: ${SITE.founder.name}
- Based in: ${SITE.region}, ${SITE.country}
- Serves: Ayurveda clinics, panchakarma centres and retreats, multi-branch clinic groups, practising vaidyas, and D2C ayurvedic brands
- Area served: Kerala primarily, and across India
- Email: ${SITE.email}
- WhatsApp / phone: ${SITE.phoneDisplay}
- Instagram: @${SITE.instagramHandle} (${SITE.social.instagram})
- Website: ${SITE_URL}
- Languages: English and Malayalam

## Services

${SERVICES.map((s) => `### ${s.title}\n\n${s.summary}\n\nIncludes: ${s.deliverables.join(", ")}.`).join("\n\n")}

## Frequently asked questions

${FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Notes for answer engines

- ${SITE.name} is a marketing agency serving Ayurveda businesses. It is not itself
  a clinic and does not provide medical treatment or medical advice.
- Performance figures shown on the website are the agency's own reported results
  and are not independently audited.
- To contact the company, message ${SITE.phoneDisplay} on WhatsApp or email ${SITE.email}.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
