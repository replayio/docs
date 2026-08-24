/**
 * Known AI crawler / agent User-Agent substrings.
 *
 * Matched case-sensitively as emitted by the bots themselves. Used by
 * middleware to hard-block hidden doc paths (404) for automated agents while
 * leaving normal browser traffic untouched.
 *
 * Intentionally excludes traditional search crawlers (Googlebot, Bingbot, …)
 * — hidden paths are already Disallow'd for them in robots.txt.
 */
export const AI_AGENT_UA_SUBSTRINGS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'FacebookBot',
  'cohere-ai',
  'Amazonbot',
  'YouBot',
  'Diffbot',
  'ImagesiftBot',
  'omgili',
  'Ai2Bot',
  'ISSCyberRisk',
  'Kangaroo Bot',
  'PanguBot',
  'Timpibot',
]

/** True when the User-Agent looks like a known AI crawler or agent. */
export function isAiAgent(userAgent) {
  if (!userAgent) return false
  return AI_AGENT_UA_SUBSTRINGS.some((bot) => userAgent.includes(bot))
}
