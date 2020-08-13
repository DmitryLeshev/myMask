import { siteNavigation } from "./site-navigation/site-navigation";
import { search } from "./search/search";

const commonBlocks = () => {
    console.log('common.blocks working...');

    search();
    siteNavigation();
}

commonBlocks();
