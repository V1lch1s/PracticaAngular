import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MibotonComponent } from './miboton/miboton.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            CommonModule,
            MibotonComponent,
            FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;
  textoOculto: boolean = true;
  elementos: string[] = ['UNO', 'DOS', 'TRES'];
  nuevoElemento: string = '';
  title = 'practica-de-angular';

  incrementar() {
    this.contador++;
    this.actualizarTextoOculto();
  }

  decrementar() {
    this.contador--;
    this.actualizarTextoOculto();
  }

  actualizarTextoOculto() {
    this.textoOculto = this.contador < 5;
  }

  agregarElemento() {
    if (this.nuevoElemento.trim()) {
      this.elementos.push(this.nuevoElemento.trim());
      this.nuevoElemento = '';
    }
  }
}
