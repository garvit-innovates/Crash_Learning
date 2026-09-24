class cookies{

    constructor(page){
        this.page = page;
    }

    async storeCookie(){
        await this.page.context().storageState({ path: 'auth.json' });
    }

};
module.exports = {cookies};
