// Element UI - Vue Toolkit
//https://element.eleme.io/#/en-US/component/quickstart
import Vue from 'vue';

import {
    Aside,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Carousel,
    CarouselItem,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Icon,
    Popover,
    RadioGroup,
    RadioButton,
    Table,
    TableColumn,
    Tabs,
    TabPane,
    Tag,
    Tooltip,
    Tree,
    Loading,
    Message,
    MessageBox,
    Notification,
    Select,
    Option,
    Row,
    Col,

} from 'element-ui'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// configure language
locale.use(lang)

Vue.component(Aside.name, Aside); //demo
//Vue.use(Aside);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Icon);
Vue.use(Popover)
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tooltip);
Vue.use(Tree);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);

Vue.use(Loading.directive);

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;

// all from Vue Toolkit
//  import ElementUI from 'element-ui'
//  import Cookies from 'js-cookie'
//  import i18n from '@/lang'
//
//  Vue.use(ElementUI, {
//      size: Cookies.get('size') || 'medium', // set element-ui default size
//      i18n: (key, value) => i18n.t(key, value)
//  })