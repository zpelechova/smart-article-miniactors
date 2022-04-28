import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        enqueueFromArticles: true,
        proxy: {
            "useApifyProxy": true,
        },
    });
});