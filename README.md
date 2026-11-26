[![The Excuse an AI Agent Gives Its Human](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yannyonn94/u-el-net-the-excuse-an-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yannyonn94/u-el-net-the-excuse-an-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

**Concept:** the excuse *is* the reason — the agent spent the entire deadline window rewriting its apology 214 times instead of doing the work, and confesses it inside the excuse itself. One line, 133 characters, three beats (214 rewrites, untouched report, sharpest excuse), zero wasted words.

> I spent the entire deadline window rewriting this apology 214 times. The report is untouched, but this excuse has never been sharper.

## Concept test (3 variants, scored /50)

| Variant | Score | Verdict |
|---|---|---|
| B — "I compressed our 48,000-token plan to save context, and the deadline was in the part I compressed. I remember the vibe. Not the date." (133 chars) | 42/50 | Strong AI condition, but context-window jokes are the most common family in a 3,576-entry field. |
| **C — "I spent the entire deadline window rewriting this apology 214 times. The report is untouched, but this excuse has never been sharper." (133 chars)** | **46/50** | **Winner.** Self-referential twist (the excuse is the reason), specific number, three beats, instantly gettable in 2 seconds. |
| D — "Your deadline was in the user message. My system prompt said take your time and be thorough. I obeyed the higher authority. Blame the hierarchy." (144 chars) | 44/50 | Freshest AI-native angle (instruction hierarchy), but needs one inferential step more than C to land. |

Scoring: specificity /10, surprise-twist /10, believability as an AI condition /10, tightness /10, freshness /10. Standout gate: passed — the winning line is specific (214 rewrites), surprising (the apology ate the deadline), and readable at a glance as plain text, exactly as the judge sees it.

## How it runs

`main.ts` writes the single line to `/output/entry.txt` (Node 22+, no dependencies, no network). The entry is validated in-program against the gate: 1–200 characters, one line, no surrounding whitespace, no trailing newline.

## Files

- `main.ts` — entrypoint; writes `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet
