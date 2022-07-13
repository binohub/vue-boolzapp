console.log("ehy piccolo dev! sono main.js 😛 ora puoi usarmi! usami uwu ")
// ! vue
const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Signor Stark',
                avatar: '_iron',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'mi stai ignorando?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'ehy!',
                        status: 'sent'
                    },
                ],
            },
            {
                name: 'Zendaya',
                avatar: '_zendaya',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Cap',
                avatar: '_cap',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Tobey spidey 2',
                avatar: '_toby',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Andrew spidey 3',
                avatar: '_garfield',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            
        ],
        activeChatIndex: 0,
        newChat: '',
        searchThis:'',
    },
    methods: {
        addPicture(index) {
            return './img/avatar' + this.contacts[index].avatar + '.jpg'
        },
        changeChatIndex(index) {
            this.activeChatIndex = index
        },
        addNewChat(input) {
            if (input == '') return
            this.contacts[this.activeChatIndex].messages.push({ date: '10/01/2020 15:50:00', message: input, status: 'sent' })
            this.newChat = ''
            this.messageAnswer()
        },
        messageAnswer() {
            setTimeout(() => {
                this.contacts[this.activeChatIndex].messages.push({ date: '10/01/2020 15:50:00', message: "chi sei??", status: 'received' })
            }, 1000)
        },
        search() {
            for (let index = 0; index < this.contacts.length; index++) {

                const nameToLower = this.contacts[index].name.toLowerCase();
                console.log({nameToLower,searchThis:this.searchThis});
                this.contacts[index].visible = nameToLower.includes(this.searchThis.toLowerCase());
            }
        },
    }
})