import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AmbariSidebarComponent extends Component {
  testDid() {
    $('.navigation-bar').navigationBar({
      fitHeight: true,
      collapseNavBarClass: 'icon-double-angle-left',
      expandNavBarClass: 'icon-double-angle-right',
    });
  }
}
