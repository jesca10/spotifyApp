import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moonSharp, sunnySharp, arrowForward } from 'ionicons/icons';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {

  //* [Tarea]: Agregar información de minimo 3 slides para mostrar en la vista. ✅
  //* [Tarea]: Cambiar mediante el click de un boton el tema (color) de los slides. ✅

  tema: any = {
    modo: 'oscuro',
    bg: 'var(--tema-oscuro-fondo)',
    texto: 'var(--tema-oscuro-texto)',
    icon: 'sunny-sharp'
  }
  genres = [
    {
      title: '🎧 Hip-Hop',
      image: 'https://www.shutterstock.com/image-vector/street-dancers-dancing-silhouette-hip-260nw-2574432969.jpg',
      description: 'Un género lleno de ritmo, creatividad y estilo. Nació en las calles y se convirtió en una forma de expresión que une música, baile y cultura.'
    },
    {
      title: '🎸 Rock',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtq6-eNJV0PJ2eXcnRE5IKEZGMUKpts9-tGgRskyKF9CfiBB8AN7isNI562Rj7SZAJoOI&usqp=CAU',
      description: 'Energía, pasión y guitarras inolvidables. El rock abarca desde los clásicos legendarios hasta los sonidos más modernos que siguen haciendo vibrar al mundo.'
    },
    {
      title: '🎤 Rap',
      image: 'https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2019/11/15/02raper.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.750.422.jpeg',
      description: 'Más que rimas rápidas: el rap es una forma poderosa de contar historias, compartir ideas y conectar con la realidad a través de la música.'
    }
  ]

  constructor(private storageService: StorageService, private router: Router) {
    addIcons({ moonSharp, sunnySharp, arrowForward });
  }

  async ngOnInit() {
    await this.loadStorageData();
  }

  async cambiarTema() {
    const temaClaro = {
      modo: 'claro',
      bg: 'var(--tema-claro-fondo)',
      texto: 'var(--tema-claro-texto)',
      icon: 'moon-sharp'
    };

    const temaOscuro = {
      modo: 'oscuro',
      bg: 'var(--tema-oscuro-fondo)',
      texto: 'var(--tema-oscuro-texto)',
      icon: 'sunny-sharp'
    };

    this.tema = this.tema.modo === 'oscuro' ? temaClaro : temaOscuro;

    await this.storageService.set('theme', this.tema);
  }

  async loadStorageData() {
    const theme = await this.storageService.get("theme");
    if (theme) this.tema = theme;
  }

  //* [Tarea]: Agregar función para navegar a la página intro. ✅
  navigateTo() {
    this.router.navigateByUrl('/intro');
  }
}
