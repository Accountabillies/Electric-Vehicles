import puppeteer, {Browser} from "puppeteer";


const scrape = async () => {
    const browser: Browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://books.toscrape.com/");
    // await page.screenshot({ path: "example.png" });

    const bookData = await page.evaluate(() => {
        const bookPods = Array.from(document.querySelectorAll(".product_pod"));
        const data = bookPods.map(book => {
            let title = book.querySelector("h3 a")?.getAttribute("title");
            let price = book.querySelector(".price_color")?.textContent;
            return {title, price};
        });
    });
    await browser.close();
}


export default scrape;
