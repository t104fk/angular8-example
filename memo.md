# Angular8覚書

## 俯瞰での説明をここに
- Angularはモジュール型のアプリケーション
- NgModuleはアプリケーションドメイン、ワークフロー、または密接に関わる一連の機能をまとめたコードブロックのコンテナ
- NgModuleにコンポーネント、サービスプロバイダー、および下位のNgModuleを含める
- NgModuleは機能をインポートしたりエクスポートしたりして他のモジュールと関連させて使う

## 実行順というか順番
0. `@angular/cli`で`ng`コマンド
0. `angular.json`
    0. indexやbootstrap用のtsスクリプトの場所書いてある
0. `browser-platform-dynamic`にroot moduleを`bootstrapModule`で指定して実行
0. `@NgModule`の`bootstrap`プロパティがアプリケーションスタート時のコンポーネント
0. `bootstrap`されたコンポーネントの`@Component`デコレータに`selector`が指定されている
0. それを`index.html`などSPAでのhtmlに書く
0. `@Component`デコレーターで指定されたスタイルはそのコンポーネントのテンプレート内でのみ有効

## テンプレート構文
- `(property)`で親から子へのone way bindings
- `[property]`で子から親へのone way bindings
- `[(property)]`でtwo way bindings

## 色々メモ
- `browser-platform-dynamic`はユーザーが作成したapp moduleのプラットフォームを作成する処理
- `@NgModule`はデコレーターと呼ぶ
- `platform-browser`はいろんなブラウザで実行するためのやつ?(`Exports required infrastructure for all Angular apps`)
- `@Input`で親コンポーネントから値を受け取る.`@Output`で子コンポーネントから親コンポーネントにイベント(値)を渡す

## 参考
- https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604
