import {Inject} from '../../decorator/index';

@Inject('$randomNames','$user')
class homeController {
  constructor() {
    this.name = this.$user.name;
    this.label = '<label for="" class="red">123456</label>';
  }
  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.$randomNames.getName();
  }
}

export default homeController;