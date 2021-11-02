---
layout: post
author: Punn
---

*Inspired by [Jason Choi](https://twitter.com/mrjasonchoi), GP of The Spartan Group*


DeFi is approaching its pre-teen years and has enjoyed an amazing year outperforming the crypto market as a whole. This outperformance is measured in each protocol’s token, some of which generate cash flow (dividends) for token holders while others do not. For protocols returning value back to tokenholders, the process of performing valuations is straightforward and similar to dividend stocks. However, for “valueless” governance tokens, cash flow models are generally inappropriate. 

Currently, cryptoassets including DeFi have a high beta against Ethereum and the decoupling of asset prices have only been temporarily observed. Since there are proportionately more “valueless” governance tokens, the performance of these protocols have arguably more effect on the overall DeFi ecosystem than those generating cash flow. Thus, investors must find appropriate models to value these new assets, which traditional models struggle to make sense of.  

In this post, I will share my process of valuing DeFi protocols liquidly trading on the open market. This is the process I follow for valuing all DeFi tokens, regardless of when it accrues value back to token holders. DeFi is it’s own asset class within crypto, and the valuation must be performed on relative terms if we are aiming for the best returns in the market. 

Take my analysis with a grain of salt and apply your own style/analysis. 

Five step valuation process:

&emsp;&emsp;&emsp;I. **Financials**
&emsp;&emsp;II. **Fundamentals**
&emsp;&emsp;III. **Market**
&emsp;&emsp;IV. **Community**
&emsp;&emsp;V. **Intangibles**

## Financials
The first step of valuation is the financial valuation. The process is most familiar to methods of valuation in traditional finance. While it is natural to place the great importance on financial valuations in tradfi, the lack of consensus in the use of valuation models means we should not be too strict on using these models to screen investments. We will use Comparable Companies Analysis (comps), a valuation model that compares financial ratios/metrics across comparable protocols. This approach is the most common in crypto firms.

As an example to help illustrate this step, we will be performing a financial valuation on Sushiswap.

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="/assets/imgs/defi-valuation/FDMC.png" width="500" align="middle">

&emsp;&emsp;&emsp;&emsp;_Data Extracted from tokenterminal.com, coingecko.com, and duneanalytics.com_

Performing a comps analysis paints SUSHI as relatively undervalued compared to other DEXes. However, some ratios are incorrectly inflated from using fully diluted market cap (FDMC) in the calculations instead of circulating market cap (CMC). In many cases where vesting schedules are spread over 5-10 years, FDMC is an inaccurate representation of a protocol’s valuation (potential outcomes for valuation increase exponentially with time); therefore, we will use CMC as well.

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="/assets/imgs/defi-valuation/CMC.png" width="500" align="middle">

&emsp;&emsp;&emsp;&emsp;_Data Extracted from tokenterminal.com, coingecko.com, and duneanalytics.com_

Calculating ratios using CMC indicates that SUSHI is more undervalued on most metrics but also not grossly mispriced. It’s in the middle of the pack in two of the three ratios. 

The comps analysis indicates that SUSHI is relatively undervalued on a financial basis. However, comps alone do not explain why some ratios deviate far from the rest: Uniswap’s MC/TVL, Curve’s MC/7D VOL, and 0x’s P/S. For example, Uniswap’s low TVL is because the protocol doesn’t support staking rewards for UNI tokens. 

The comps analyses poses a few problems:

- Data used to calculate the ratios are backward looking. At best, it reflects the present. Metrics can change quickly and aren't path dependent.
- Future functionality of the protocol is not accounted for. Features that may significantly increase TVL and Volume are not considered in the model and could drastically change the model in the future. Different value accrual mechanisms (fees, algo burns) potentially affect future metrics.
- Different business models hinder the comparability of each protocol. For instance, Uniswap is solely focused on creating a capital efficient AMM while Sushiswap is aiming to create a suite of DeFi products.

For lending protocols, analyzing protocol treasury and insurance are quite important as well. The treasury should be liquid and able to cover customers' losses in the case of an exploit. Treasury diversification is also important and a protocol’s treasury should grow with the market.

Thus, our financial valuation comes with great uncertainty, similarly to valuing software companies two decades ago. This is where we turn to analyzing fundamentals which will be where most of our work is done.

## Fundamentals
To analyze fundamentals, we must jump into the protocol head first and immerse ourselves with everything related to the project. To truly develop strong conviction on an investment, one must understand it at a level much deeper than the typical market participant. This understanding must consist of both breadth and depth.

It goes without saying that understanding the inner workings of the product implementation and mechanism design is essential. This will allow an investor to meaningfully evaluate functional tradeoffs and compare the protocol against competitors. There are many resources at your disposal to achieve this end: whitepaper, documentation, Medium posts, research papers, and actually using the product. Though you shouldn’t stop there. Speak to developers, ask questions in the Discord/Telegram groups, and lurk in anon-forums. Your exploration should make you an expert at all aspects of the project. 

A quick way to receive feedback on your research is to explain the protocol to a non-crypto native investor. 

Readers may find the following resources useful for research:

[Delphi Digital](https://dephidigital.io)

[Messari Resarch](https://messari.io/)

[Dune Analytics](https://duneanalytics.com)

[Nansen](https://nansen.ai)

[Paradigm (VC)](https://paradigm.xyz)

[Mechanism (VC)](https://mechanism.capital)

[Dragonfly (VC)](https://medium.com/dragonfly-research)

[Pantera (VC)](https://blog.panteracapital.com)
## Market

This section is referring to market conditions and current narratives. Crypto is a market built on hype cycles and trends. Sectors in crypto follow extreme markup and distribution phases. For instance, the NFT craze in early 2021 and the recent L2 narrative sending MATIC soaring. To be truly early on a project, the narrative may not seem obvious to the general market participant (yet).

&emsp;&emsp;&emsp;&emsp;<img src="/assets/imgs/defi-valuation/hype.png" width="600" align="middle">

&emsp;&emsp;&emsp;&emsp;_NYC Media Lab_

A distribution phase is a period where crypto assets underperform and DeFi often gets hit the hardest, albeit there aren’t many data points to reference. In this period, assets that have gone down 90% can go down another 90%. If we aren’t in a supercycle, investors must wisely choose when they will DCA into a DeFi investment. 
 
Betting on narratives proves to be extremely profitable in markup phases of a sector’s hype cycle. Front-running upcoming milestones in crypto are the most effective way to “anticipate” narratives, since accurately predicting a new narrative is near impossible. Take EIP-1559 and the anticipated Ethereum supply shortage. ETH/BTC and ETH/USD rallied as people thought the fork is deflationary for the supply of ETH. The milestones themselves could serve as an area to secure profits too, “selling the news” as most would say. 

The rotation of capital between sectors are also extremely important and often follow the current narrative. Investors who are able to master the rotation of capital between sectors will prove to be extremely profitable. Most aren’t and should simply follow those who are capable. There are a multitude of ways to do this: watch whale wallets, talk to successful traders and much more.

The approach to searching for narratives is discretionary and requires investors to remain active and consistently follow developments in the space. Regardless of whether we are in a bear market, I will still continue to read research reports, do deep dives on projects, talk to DeFi experts, and infinitely scroll CT.

## Community

One of, if not the most unique aspects of DeFi and the crypto industry is the importance of active communities for financial activity, governance decisions, and narrative/hype building. In tradfi, only certain groups of investors have the opportunity to contribute to a company’s success. However, in DeFi, a protocol derives much of its value from users' support and involvement. By using the product, providing feedback, contributing to governance, and even creating memes for the project, communities are able to drive the success of many DeFi protocols. The quality of community members are also important in building a sustainable group of believers in a project. 

OlympusDAO is an interesting case study observation for the aforementioned phenomena. The community behind OlympusDAO is arguably its greatest asset. The Olympus Discord is well organized, welcoming to new users, and extremely active with over 9,000 “Ohmies” and 110 server boosts (as of the time of writing). The team also hosts many community events including poker night, book/music club, game night etc. A separate DAO discord is also extremely active with meaningful conversations proposing potential protocol improvements. Ohmies created a meme for Olympus with the (3, 3) game theory reference. (3, 3) refers to the greatest payoff for two parties being staking and staking their OHM tokens. The power of memetic narratives has proven to be all powerful (GME, DOGE). Even with trivial economic policies and function implementations, OHM found much success in a time where all crypto prices were being marked down. Also, being named the literal place where greek gods reside is also not too shabby. 

A few areas to look at for analysing community:
1. Twitter -> quantity and quality of followers
2. Discord -> members and boosts, communication from team
3. Events -> commmunity building, PR
4. Memes -> self-reenforcing

Some tools that you may find useful:

[Merv](https://merv.tech)

[Santiment](https://santiment.net)

[LunarCrush](https://lunarcrush.com)
## Intangibles

In crypto, like other industries, there are many elements of a product that contribute to its success but cannot be quantified. 

Known as Goodwill on a typical company’s balance sheet, the brand and recognition of a protocol can hold significant value. Projects that have already found product-market-fit and are somewhat lindy will have more value than another identical project all else equal. Sushiswap was already a success in the DEX sector of DeFi. After they launched lending app Kashi, it was able to bootstrap users quite fast. 

For example, imagine a team has developed a decentralized futures trading platform. It would likely perform much better if they launched it as an additional feature on Uniswap vs. they launched as a standalone project, even though the mechanism and implementation are the same. Goodwill is often reflected in market cap: higher MC, higher valuation by market, higher goodwill. On occasion, goodwill extends beyond market valuations (Synthetix) and experience is required to know what is reputable and what isn’t.

Another intangible quality is user experience. With protocols already being quite complicated to use (ETH wallet → transfer ETH from CEX → pay/adjust gas), a UX that is difficult to navigate could deter users on their first visit. Thus, the UX must be simple enough to hook new users on their first or second visit. Although most projects do get this right (except Nonce Finance), the logo and name should be catchy and appropriate. 

Interoperability should also be considered given some context. This can be separated into both cross-chain and cross-protocol interoperability. In both situations, the UX of protocols will be much more convenient and users of other chains/protocols can be bootstrapped into using the protocol in discussion, promoting higher usage and growth. However, not all protocols need to be interoperable. It would not be a significant added benefit for a derivatives trading protocol like dYdX to be cross-chain interoperable, but it would be for Oracles like Chainlink.

Finally, the team is the final intangible means of evaluation. The ability to perform this evaluation often comes with experience and is discretionary. The most obvious red flag is fully pseudonymous team members. Usually they are so for a reason, and in many cases for worse than for better. Sushiswap was initially pseudo-rug pulled by pseudonymous founder Chef Nomi (now doxxed); however, it is now  being successfully run by a team of both doxxed and pseudonymous developers. The team’s technical ability will determine the quality of the implementation and the security of the protocol. Investors with programming experience can inspect the project’s Github repositories and view weekly commits (could be farmed so actually check each commit).

### Good luck!

Valuation of DeFi protocols is an art, not a science. Many elements of the analysis require personal discretion developed through experience in the markets. By no means am I an exceptional investor. The reality is, as the industry is still young, one does not need to be exceptional to find above-market returns. However, the greatest returns are achieved by those who are willing to research and learn. 

For investors with little capital to start, focus on making concentrated and high-conviction bets. If you have lots of capital, you probably don’t need to listen to me with your 100+ names portfolio.

TLDR;

Financials

- Comps

- Protocol Resources (Treasury,Insurance)

Fundamentals 

- Product Implementation

- Competitors

- Future

- Usage statistics 

Market

- Bull/Bear

- Capital Rotation / Sectors

Community

- Social Media

- Narrative / Memes

Intangibles

- Brand

- UI/UX
	
- Interoperability
	
- Team
