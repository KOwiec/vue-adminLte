// vue components base on AdmiLte code
import  Modal from './Modal/index.js';
import  SvgIcon from './SvgIcon/index.js';
import  Row from './ElementsAdminLte/Grid/index.js';
import  Column from './ElementsAdminLte/Grid/index.js';
import  Menu from './Menu/index.js';
import  MenuItem from './Menu/index.js';
import  Submenu  from './Menu/index.js';
import  Card from './Widgets/Card/index.js';
import  DirectChat from './Widgets/DirectChat/index.js';
import  Button from './ElementsAdminLte/Button/index.js';
import  ButtonGroup from './ElementsAdminLte/Button/index.js';
import  RadioButton from './ElementsAdminLte/Button/index.js';
import  AppButton from './ElementsAdminLte/Button/index.js';
import  NavTabs from './ElementsAdminLte/Tabs/index.js';
import  TabPane from './ElementsAdminLte/Tabs/index.js';
import  Table from './ElementsAdminLte/Table/index.js';
import  Link from './ElementsAdminLte/Link/index.js';
import  Input from './ElementsAdminLte/Input/index.js';
import  InputFile from './ElementsAdminLte/Input/index.js'
import  InputGroup from './ElementsAdminLte/Input/index.js';
import  Form from './ElementsAdminLte/Form/index.js';
import  FormGroup from './ElementsAdminLte/Form/index.js';
import  CheckBox from './ElementsAdminLte/CheckBox/index.js'
import  CheckBoxGroup from './ElementsAdminLte/CheckBox/index.js'
import  Radio from './ElementsAdminLte/Radio/index.js'
import  RadioGroup from './ElementsAdminLte/Radio/index.js'
import  Textarea from './ElementsAdminLte/Textarea/index.js'
import  Select from './ElementsAdminLte/Select/index.js'
import  Select2 from './ElementsAdminLte/Select/index.js'
import  Switch from './ElementsAdminLte/Switch/index.js'
import  Text from './ElementsAdminLte/Text/index.js'
import  Alert from './ElementsAdminLte/Alert/index.js'
import  Callout from './ElementsAdminLte/Callout/index.js'
import  Carousel from './ElementsAdminLte/Carousel/index.js'
import  Accordion from './ElementsAdminLte/Accordion/index.js'
import  Blockquote from './ElementsAdminLte/Blockquote/index.js'
import  InfoBox from './Widgets/InfoBox/index.js'
import  SmallBox from './Widgets/SmallBox/index.js'
import  NavDropdown from './ElementsAdminLte/NavDropdown/index.js'
import  Dropdown from './ElementsAdminLte/Dropdown/index.js'
import  DropdownMenu from './ElementsAdminLte/Dropdown/index.js'
import  DropdownItem from './ElementsAdminLte/Dropdown/index.js'
import  DropdownMenuItem from './ElementsAdminLte/Dropdown/index.js'
import  DropdownSubmenu from './ElementsAdminLte/Dropdown/index.js'
import  Pagination from './ElementsAdminLte/Pagination/index.js'
import  Range from './ElementsAdminLte/Range/index.js'
import  Timeline from './ElementsAdminLte/Timeline/index.js'
import  TimelineDaily from './ElementsAdminLte/Timeline/index.js'

const components = [
    Modal,
    SvgIcon,
    Row, Column,
    Menu, MenuItem, Submenu,
    Card,
    DirectChat,
    Button, ButtonGroup, RadioButton, AppButton,
    Input, InputGroup, InputFile,
    NavTabs, TabPane,
    Table,
    Link,
    Form, FormGroup,
    CheckBox, CheckBoxGroup,
    Radio, RadioGroup,
    Textarea,
    Select, Select2,
    Switch,
    Text,
    Alert,
    Callout,
    Carousel,
    Accordion,
    Blockquote,
    InfoBox,
    SmallBox,
    NavDropdown,
    Dropdown, DropdownMenu, DropdownItem, DropdownMenuItem, DropdownSubmenu,
    Pagination,
    Range,
    Timeline, TimelineDaily,
];

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
};

export default {
       install,
       Modal,
       SvgIcon,
       Row, Column,
       Menu, MenuItem, Submenu,
       Card,
       DirectChat,
       Button, ButtonGroup, RadioButton, AppButton,
       Input, InputGroup, InputFile,
       NavTabs, TabPane,
       Table,
       Link,
       Form, FormGroup,
       CheckBox, CheckBoxGroup,
       Radio, RadioGroup,
       Textarea,
       Select, Select2,
       Switch,
       Text,
       Alert,
       Callout,
       Carousel,
       Accordion,
       Blockquote,
       InfoBox,
       SmallBox,
       NavDropdown,
       Dropdown, DropdownMenu, DropdownItem, DropdownMenuItem, DropdownSubmenu,
       Pagination,
       Range,
       Timeline, TimelineDaily,
};
