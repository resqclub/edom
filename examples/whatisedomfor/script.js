const { el, mount, list } = redom;

// initial data
var jsonData = {
    centerInfo: {
        title: {
            text: 'Hello, ',
            name: 'World',
        },
        content: ['This is an example of a RE:DOM application']
    }
};

// update data in 3s
setTimeout(function() {
    jsonData = {
        centerInfo: {
            title: {
                text: 'Wowza, ',
                name: 'Dude'
            },
            content: ['This is an example of a RE:DOM application',
                'Check the source. This app has 4 RE:DOM classes',
                'What if there was an editor for them?',
                'I would just give the <b>jsonData</b> and rest would be as automated as possible'
            ]
        }
    };
    update();
}, 3000);


// RE:DOM classes

class Page {
    constructor() {
        this.el = el('div.page',
            this.centerInfo = new CenterInfo()
        );
    }
    update(jsonData) {
        this.centerInfo.update(jsonData.centerInfo);
    }
}

class CenterInfo {
    constructor() {
        this.el = el('div.centerInfo',
            this.title = new CenterTitle(),
            this.content = list('ul', CenterContentItem)
        );
    }
    update(jsonData) {
        this.title.update(jsonData.title);
        this.content.update(jsonData.content);
    }
}

class CenterTitle {
    constructor() {
        this.el = el('h1',
            this.text = el('span'),
            this.name = el('span.name')
        )
    }
    update(jsonData) {
        this.text.textContent = jsonData.text;
        this.name.textContent = jsonData.name;
    }
}

class CenterContentItem {
    constructor() {
        this.el = el('li.centerItem');
    }
    update(jsonData) {
        this.el.innerHTML = jsonData;
    }
}

var page = new Page();
mount(document.body, page);

function update() {
    page.update(jsonData);
}
update();

