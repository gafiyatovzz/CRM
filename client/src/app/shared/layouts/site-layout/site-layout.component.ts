import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {

  links = [
    {url: '/overview', name: 'Обзор'},
    {url: '/analytics', name: 'Аналитика'},
    {url: '/history', name: 'История'},
    {url: '/order', name: 'Заказы'},
    {url: '/category', name: 'Список мастеров'}

  ]
  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logout(event){
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['./login'])
  }

}
