import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class IntroPage {

  constructor(private router: Router, private storageService: StorageService) {
    addIcons({ arrowBack });
  }

  goBack() {
    this.router.navigateByUrl('/home');
    //* [Tarea]: Al volver al home guardar en el storage que ya estuve en la pagina intro. ✅
    this.storageService.set('visitedIntro', true);
  }
}
