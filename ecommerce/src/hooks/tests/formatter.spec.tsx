// arquivo utils.test.js

import { formatarNumero } from '../formatter';



describe("Formatter", () => {
    it('deve formatar o número corretamente', () => {
        const numero = 1000;
        const numeroFormatado = formatarNumero(numero);
      

        expect(numeroFormatado).toBe('1.000,00');
        
      });

})

