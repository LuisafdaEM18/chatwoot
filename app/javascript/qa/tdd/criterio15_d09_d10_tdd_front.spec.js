// TDD del frontend — criterio 15 (refactorización y despliegue final)
// D-09 (Luisa, RF-04 etiquetas) y D-10 (Daniel, RF-09 atributos), encontrados con Cypress en el
// criterio 7: con Vuelidate 2 cada regla es un objeto ({ $invalid, $message, ... }), nunca un
// booleano. El código preguntaba `!validation.title.required` y `!this.v$.attributeKey.isKey`, que
// siempre es false. Por eso la etiqueta inválida no mostraba ningún mensaje y la clave con espacios
// mostraba "Key is required" en lugar de "Invalid key".
//
// AAA en cada prueba. D-09 usa Vuelidate real (useVuelidate dentro de un effectScope) para que el
// objeto de validación tenga la forma que recibe el componente. D-10 llama al computed con un
// contexto falso (stub de v$ y de $t), sin montar el formulario.
import { effectScope, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import labelValidations, {
  getLabelTitleErrorMessage,
} from 'dashboard/routes/dashboard/settings/labels/validations';
import AddAttribute from 'dashboard/routes/dashboard/settings/attributes/AddAttribute.vue';
import EditAttribute from 'dashboard/routes/dashboard/settings/attributes/EditAttribute.vue';

const validarEtiqueta = title => {
  const state = reactive({
    title,
    description: '',
    color: '#000000',
    showOnSidebar: true,
  });
  const scope = effectScope();
  const v$ = scope.run(() => useVuelidate(labelValidations, state));
  v$.value.$touch();
  const mensaje = getLabelTitleErrorMessage(v$.value);
  scope.stop();
  return mensaje;
};

describe('getLabelTitleErrorMessage con Vuelidate 2 [RF-04, D-09]', () => {
  it('un nombre vacío muestra el error de obligatorio', () => {
    // Arrange / Act
    const mensaje = validarEtiqueta('');
    // Assert
    expect(mensaje).toBe('LABEL_MGMT.FORM.NAME.REQUIRED_ERROR');
  });

  it('un nombre de un carácter muestra el error de longitud mínima', () => {
    expect(validarEtiqueta('a')).toBe('LABEL_MGMT.FORM.NAME.MINIMUM_LENGTH_ERROR');
  });

  it('un nombre con espacios muestra el error de caracteres válidos', () => {
    expect(validarEtiqueta('qa etiqueta')).toBe(
      'LABEL_MGMT.FORM.NAME.VALID_ERROR'
    );
  });

  it('un nombre válido no muestra error', () => {
    expect(validarEtiqueta('qa_etiqueta')).toBe('');
  });
});

describe('keyErrorMessage de atributos con Vuelidate 2 [RF-09, D-10]', () => {
  const contexto = ({ requiredInvalid, isKeyInvalid }) => ({
    $t: clave => clave,
    v$: {
      attributeKey: {
        required: { $invalid: requiredInvalid },
        isKey: { $invalid: isKeyInvalid },
      },
    },
  });

  [
    ['AddAttribute', AddAttribute],
    ['EditAttribute', EditAttribute],
  ].forEach(([nombre, componente]) => {
    it(`${nombre}: una clave con espacios muestra "Invalid key"`, () => {
      // Arrange
      const ctx = contexto({ requiredInvalid: false, isKeyInvalid: true });
      // Act
      const mensaje = componente.computed.keyErrorMessage.call(ctx);
      // Assert
      expect(mensaje).toBe('ATTRIBUTES_MGMT.ADD.FORM.KEY.IN_VALID');
    });

    it(`${nombre}: una clave vacía muestra "Key is required"`, () => {
      const ctx = contexto({ requiredInvalid: true, isKeyInvalid: false });
      expect(componente.computed.keyErrorMessage.call(ctx)).toBe(
        'ATTRIBUTES_MGMT.ADD.FORM.KEY.ERROR'
      );
    });
  });
});
