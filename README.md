# Mata Viva — Cartilha Digital · Biomas e Relações Ecológicas

Cartilha digital de divulgação científica produzida como Etapa 4 da APPL da unidade curricular **Ecologia** (Bacharelado em Ciências Biológicas — Polo Palhoça-SC, 2026).

Aborda o bioma **Mata Atlântica** no município de **Palhoça-SC** (Floresta Ombrófila Densa), com levantamento das 20 espécies nativas mais abundantes (SiBBr/IUCN) e registro em campo de cinco organismos observados em quintal urbano (rua Petúnia, bairro Jardim Eldorado):

1. Espada-de-são-jorge (*Sansevieria trifasciata*)
2. Lírio-do-brejo (*Neomarica* sp.)
3. Limoeiro / limão-cravo (*Citrus limonia*)
4. Pitangueira (*Eugenia uniflora*)
5. Aroeira-pimenta (*Schinus terebinthifolius*)

## Publicar no GitHub Pages

1. Crie um repositório novo em <https://github.com/new> (público, ex.: `cartilha-biomas`).
2. Envie os arquivos desta pasta para o repositório:

   ```bash
   cd cartilha-biomas
   git init -b main
   git add .
   git commit -m "Cartilha digital - APPL Ecologia (Biomas e Relações Ecológicas)"
   git remote add origin https://github.com/SEU-USUARIO/cartilha-biomas.git
   git push -u origin main
   ```

3. No GitHub, acesse **Settings → Pages**, em *Build and deployment*:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `/ (root)`
   - Clique em **Save**.
4. Em cerca de 1–2 minutos o site estará disponível em:

   ```
   https://SEU-USUARIO.github.io/cartilha-biomas/
   ```

> Não é necessário build nem dependências: o site é 100% HTML/CSS/JS estático.
