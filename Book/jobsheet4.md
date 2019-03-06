# 04. Displaying Data And Binding Data

### Praktikum - Bagian 1: Component Basic

- Buka file courses.component.ts kemudian tambahkan code seperti berikut:

```typescript
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Title = 'Belajar Angular';
  Courses;

  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';

  constructor(private service:CoursesService) { 
    this.Courses = service.getCourses;
  }

  ngOnInit() {
  }

}
```

- Buka file courses.component.html lalu tambahkan code seperti berikut:

```typescript
<p>
  {{ Title }}
</p>
<table>
  <thead>
    <th>
      #ID
    </th>
    <th>Course name</th>
  </thead>
  <tbody>
    <tr *ngFor = "let Course of Courses">
    <td>{{ Course.id }}</td>
    <td>{{ Course.name }}</td>
    </tr>
  </tbody>
</table>

<h2>{{ binding }}</h2>
<h2 [textContent]='binding'></h2>

<img src="{{imageUrl}}" />
<img [src]="imageUrl" />
```

- Hasilnya seperti berikut

![](image/js4/1.jpg)

### Praktikum – Bagian 2: Attribute Binding

- Buka file courses.component.ts tambahkan properti colspan dibawah line imageUrl

```typescript
binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
```

- Buka file courses.component.html dan tambahkan berikut ini :

```typescript
<table>
  <tr>
    <td [colspan]='colSpan'></td>
  </tr>
</table>
```

- Maka akan muncul error

- Tambahkan attr pada colspan seperti berikut:

```typescript
<table>
  <tr>
    <td [attr.colspan]='colSpan'></td>
  </tr>
</table>
```

- Selanjutnya tambahkan button pada file courses.component.html seperti berikut :
 
 ```typescript
<table>
  <tr>
    <td [attr.colspan]='colSpan'></td>
  </tr>
  <button type='button' class="btn btn-primary">tambah</button>
</table>
 ```

 - Maka akan tampil seperti gambar dibawah

 ![](images/js4/3.jpg)

 ### Bagian 4: Style Binding

- Buka file courses.component.html lalu tambahkan class binding seperti berikut :

```typescript
<table>
  <tr>
    <td [attr.colspan]='colSpan'></td>
  </tr>
  <button type='button' class="btn btn-primary">tambah</button>
</table>

<button type="button" class="btn btn-primary" [class.active]="isActive">Tambah</button>

<button type="button" class="btn btn-primary" [style.backgroundColor]="isActive?'blue':'white'">Style</button>
<br>
```

 - Hasil setelah di execute 

 ![](image/js4/4.jpg)

 ### Bagian 5: Event Binding

 - Buka file course.component.ts dan buatlah method dengan nama onSave()

 ```typescript
onSave() {
    console.log("button sudah diklik")
  }
 ```

 - Buka file courses.component.html dan tambahkan event click
 
```typescript
<button type="button" class="btn btn-default" (click)="onSave()">Button</button>
```

- Hasil jika di klik maka pada console akan muncul keterangan 

![](image/js4/5.jpg)

- Buka file courses.component.ts tambahkan parameter $event

```typescript
onSave($event) {
    console.log("button sudah diklik",$event)
  }
```

- Tambahkan juga pada courses.component.html

```typescript
<button type="button" class="btn btn-danger" (click)="onSave($event)">Button</button>
```

- Maka hasilnya akan menampilkan pointerEvent 

![](image/js4/6.jpg)

- Buatlah method onDivClick() pada file courses.component.ts
```typescript
onDivClick($event) {
    console.log("ini method div",$event)
  }
```

- Tambahkan div dan event binding pada div elemen pada file courses.component.html

```typescript
<div (click)="onDivClick($event)">
  <button type="button" class="btn btn-danger"
  (click)="onSave($event)">Button</button>
</div>
```

- Hasil yang didapat seperti berikut:

![](image/js4/7.jpg)
button sudah diklik juga akan muncul karena tidak ada pemberhentian button

- Untuk mengatasi event bubbling maka tambahkan $event.stopPropagation pada file courses.component.ts

```typescript
onSave($event) {
    $event.stopPropagation();
    console.log("button sudah diklik",$event)
  }
```

- Hasil yang didapat seperti berikut

### Praktikum – Bagian 6: Event Filtering

- Buat inputan pada file courses.component.html

```typescript
<input type="text" (keyup.enter)="onKeyUp()">
```

- Tambahkan method onKeyUp pada file courses.component.ts

```typescript
onKeyUp() {
    console.log("enter was pressed");
  }
```

- Hasil setelah dienter

![](image/js4/9.jpg)

### Praktikum – Bagian 7: Template Variable

- Tambahkan variabel #nama pada file courses.component.html

```typescript
<input type="text" #nama (keyup.enter)="onKeyUp(nama.value)">
```

- Tambahkan parameter nama pada method onKeyUp pada file courses.component.ts

```typescript
onKeyUp(nama) {
      console.log(nama);
    }
```

- Hasil yang didapat krtika adanya parameter maka hasil akan sesuai dengan apa yang diinputkan

![](image/js4/10.jpg)

### Bagian 8: Two Way Binding

- Buat property baru dengan nama kalian masing-masing dan rubah parameter pada log pada file courses.component.ts

```typescript
binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200/'
  colspan = 2;
  isActive = true;
  nama = 'Achmad';
```

- Tambahkan parameter nama pada method onKeyUp

```typescript
<input type="text" [value]="nama" (keyup.enter)="nama = $event.target.value;onKeyUp()">
```

- Hasil

![](image/js4/11.jpg)

- Buka file app.module.ts dan tambahkan form module seperti berikut :

```typescript
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
```

- Buka file course.component.html, modifikasi code nya seperti berikut :

```typescript
<input type="text" [(ngModel)] = "nama" (keyup.enter)="onKeyUp()">
```

- Hasil

![](image/js4/12.jpg)


















