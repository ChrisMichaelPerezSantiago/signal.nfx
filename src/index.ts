import { BASE_URL } from "./config";
import cheerio from "cheerio";
import request from "./request";
import lodash from "lodash";
import { parseTable } from "./util/TableParser";

const { includes, split } = lodash;

const getRootData = async ($: any) => {
  return await Promise.all(
    $("div.vc-search-card-grid div.vc-search-card").map(
      (_: number, element: any) =>
        new Promise(async (resolve, reject) => {
          try {
            const $el = $(element);
            const name = $el.find("div.pr3 a.vc-search-card-name").text();
            const name_id = split(
              $el.find("div.pr3 a.vc-search-card-name ").attr("href"),
              "/"
            )[2];

            const info = {
              avatar: $el.find("img.investor-thumbnail").attr("src"),
              label_1: $el.find("div.pr3 div:nth(0) a").text(),
              label_2: $el.find("div.pr3 div:nth(0) span:nth(1)").text(),
            };
            const sweet_spot = {
              label: $el
                .find("div.pr3 div.mt2 div:nth(0) span.vc-search-card-label")
                .text(),
              value: $el
                .find("div.pr3 div.mt2 div:nth(0) span.vc-search-card-value")
                .text(),
            };
            const investment_location = $el.find("div.mt2:nth(1)").text();

            const profile = await getPersonDetails(name_id);

            resolve({
              name,
              name_id,
              info,
              sweet_spot,
              investment_location,
              profile,
            });
          } catch (error) {
            reject(error);
          }
        })
    )
  );
};

async function getPreSeedIds() {
  const requestOpts = {
    url: `${BASE_URL}/investor-lists`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  return await Promise.all(
    $("div#stage-pre-seed ul.vcl-tag-list li").map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $el = $(element);
            const id = {
              label: $el.find("a").text(),
              value: split($el.find("a").attr("href"), "/")[2],
            };
            resolve({ ids: id });
          } catch (error) {
            reject(error);
          }
        })
    )
  );
}

async function getSeedIds() {
  const requestOpts = {
    url: `${BASE_URL}/investor-lists`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  return await Promise.all(
    $("div#stage-seed ul.vcl-tag-list li").map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $el = $(element);
            const id = {
              label: $el.find("a").text(),
              value: split($el.find("a").attr("href"), "/")[2],
            };
            resolve({ ids: id });
          } catch (error) {
            reject(error);
          }
        })
    )
  );
}

async function getSeedAIds() {
  const requestOpts = {
    url: `${BASE_URL}/investor-lists`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  return await Promise.all(
    $("div#stage-series_a ul.vcl-tag-list li").map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $el = $(element);
            const id = {
              label: $el.find("a").text(),
              value: split($el.find("a").attr("href"), "/")[2],
            };
            resolve({ ids: id });
          } catch (error) {
            reject(error);
          }
        })
    )
  );
}

export async function getInvestors(id: string) {
  const requestOpts = {
    url: `${BASE_URL}/investor-lists/${id}`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  return await getRootData($);
}

export async function getFirms(id: string) {
  const requestOpts = {
    url: `${BASE_URL}/firms/${id}`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  return await getRootData($);
}

async function getPersonDetails(name_id: string) {
  const requestOpts = {
    url: `${BASE_URL}/investors/${name_id}`,
    method: "get",
  };

  const response = await request(requestOpts);
  const $ = cheerio.load(response);

  const getName = (text: string) =>
    includes(text, "(") ? split(text, "(")[0] : text;

  const getRoles = (html: any) => {
    const regex = /<span>(.*?)<\/span>/g;
    const spanList = html.match(regex);
    const roles = [];

    for (const span of spanList) {
      const matches = span.match(regex);
      if (matches && matches.length > 0) {
        for (const match of matches) {
          const text = match.replace(/<\/?span[^>]*>/g, "");
          roles.push(text);
        }
      }
    }
    return roles;
  };

  const getSectorStageRankings = (html: any) => {
    const regex = />([^<>]+?)(?=<!--|$)/g;
    const matches = [];

    let match;
    while ((match = regex.exec(html))) {
      const text = match[1].trim();
      matches.push(text);
    }

    return matches;
  };

  const getSocialNetworks = (html: any) => {
    const regex = /<a[^>]+href="([^"]+)".*?<\/a>/g;
    const links: any[] = [];

    let match;
    while ((match = regex.exec(html)) !== null) {
      const url = match[1];
      const domain = url.match(
        /https?:\/\/(?:www\.)?([^\s/?\.#]+)[^\s]*$/i
      )?.[1];

      links.push({ domain, url });
    }

    return links;
  };

  return await Promise.all(
    $("main.content-fluid div#vc-profile").map(
      (_, element) =>
        new Promise((resolve, reject) => {
          try {
            const $el = $(element);
            const col_1 = $el.find("div.col-sm-3.col-xs-12");
            const col_2 = $el.after("div.col-sm-6.col-xs-12");

            const social_network = getSocialNetworks(
              col_1.find("div.sn-margin-top-30 span.sn-linkset").html()
            );

            const name = getName(col_2.find("div:nth(0) h1:nth(0)").text());
            const roles = getRoles(col_2.find("div:nth(1) h3:nth(0)").html());
            const headline = col_2.find("div:nth(1) h3:nth(1)").html();
            const url = col_2
              .find("div:nth(1) div.subheader:nth(0) span:nth(0) a")
              .attr("href");
            const location = col_2
              .find("div:nth(1) div.subheader:nth(0) span.nowrap span.ml1")
              .text();

            const investment_on_record = col_2
              .find("div.sn-margin-top-30 span.lh-solid:nth(7)")
              .html();

            const current_fund_size = col_2
              .find("div.sn-margin-top-30 span.lh-solid:nth(9)")
              .html();

            const sector_stage_rankings = getSectorStageRankings(
              col_2.find("div.sn-margin-top-30.relative:nth(1)").html()
            );

            const table = parseTable(col_2.html(), {});

            const profile = {
              investor_profile: {
                person: { name, roles, url, social_network },
                headline,
                location: { display_name: location },
                investment_on_record,
                current_fund_size,
                sector_stage_rankings,
                table,
              },
            };

            resolve(profile);
          } catch (error) {
            reject(error);
          }
        })
    )
  );
}
