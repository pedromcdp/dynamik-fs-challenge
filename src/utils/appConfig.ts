interface IAppConfig {
  name: string;
  description: string;
  domain: string;
}

export const AppConfig: IAppConfig = {
  name: "Desafio Dynamik FullStack",
  description: "Desafio para a posição de FullStack developer na Dynamik.",
  domain:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://dfsc.pedrocruto.pt",
};
