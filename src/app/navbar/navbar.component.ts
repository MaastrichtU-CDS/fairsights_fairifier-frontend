import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.setActive();
  }

    setActive() {
        const btnContainer = document.getElementById('navbarCollapse');

        const btns = btnContainer.getElementsByClassName('nav-link');

        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                const current = document.getElementsByClassName('active');
                console.log(current);

                if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
                }

                this.className += ' active';
            });
        }
    }

}
