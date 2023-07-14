import React from "react";
import style from "./Botao.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Botao({ children, type = "button", onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

// class Botao extends React.Component<{ texto: string }> {
// class Botao1 extends React.Component<{
//   children: string;
//   type?: "button" | "submit" | "reset" | undefined;
//   onClick?: () => void;
// }> {
//   render() {
    // const backgroundColor = "red";
    // const estaAtivo = true;
    // const styles = {
    //   backgroundColor,
    // };
    // const style = {
    //   backgroundColor: estaAtivo ? "green" : "red",
    // };
    //return <button style={{ backgroundColor }}>Botão</button>;
    // return <button style={{ backgroundColor: "blue" }}>Botão</button>;
    // return <button style={styles}>Botão</button>;

    //return <button className={style.botao}>{this.props.texto}</button>;

//     const { type = "button", onClick } = this.props;
//     return (
//       <button onClick={onClick} type={type} className={style.botao}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

// export default Botao;
