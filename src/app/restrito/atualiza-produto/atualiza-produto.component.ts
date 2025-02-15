import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';
import { Produto } from 'src/app/models/Produto.model';
import { map, tap } from 'rxjs';



@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0, "", "", "", 0);

  constructor(private _produtoService: ProdutoService, private _activatedRoute: ActivatedRoute, private _router: Router) {

    this._activatedRoute.params.subscribe((params: any) => this.produtoId = params['id']);
  }
  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe(
      (res: any) => {
        this.produto = new Produto(
          res[0].id,
          res[0].produto,
          res[0].descricao,
          res[0].foto,
          res[0].preco
        );

      })
  }


  atualizar(id: number) {
    this._produtoService.atualizaProduto(id, this.produto).subscribe(
      produto => { this.produto = new Produto(0, "", "", "", 0) },
      err => {
        alert('Erro ao atualizar');

      }
    );

    this._router.navigate(["/restrito/lista"]);
  }
    
}
