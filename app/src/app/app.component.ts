import { Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Tutorials';
  title2 = "Lazy Loading Component";

  constructor(private viewContainer: ViewContainerRef, private cfr:ComponentFactoryResolver) { }

  // Using latest method to display component after v13
  async loadAdmin() {
    this.viewContainer.clear();
    const { AdminlistComponent } = await import('./adminlist/adminlist.component');
    this.viewContainer.createComponent(AdminlistComponent)
  }

  // Using Old method to display component before v13 (ComponentFactoryResolver)
  async loadUser() {
    this.viewContainer.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent))
  }
}

