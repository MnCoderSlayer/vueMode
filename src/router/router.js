import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/index.vue')), 'home');
const content1 = r => require.ensure([], () => r(require('../page/home/content.vue')), 'home');
const content2 = r => require.ensure([], () => r(require('../page/home/content2.vue')), 'home');
export default [{
    path: '/home',
    component: home,
    children: [{
        path: 'content1',
        component: content1
    },
        {
            path: 'content2',
            component: content2
        },
    ]
}]

