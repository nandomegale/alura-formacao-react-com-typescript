import React from "react";
import style from "./Botao.module.scss";

// class Botao extends React.Component<{ texto: string }> {
class Botao extends React.Component<{
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
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

    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
