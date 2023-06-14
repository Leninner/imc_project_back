
export const config = {
    labels: {
      User: 'Usuarios',
      Schedule: 'Horarios',
      UserImc: 'IMC',
      UserFood: 'Alimentos',
      Food: 'Alimentos',
      FoodCat: 'Categorias',
      FoodType: 'Tipos',
      navigation: 'Navegación',
      pages: 'Paginas',
      filters: 'filtros',
      dashboard: 'Panel',
    },
    actions: {
        new: "Crear nuevo",
        edit: "Editar",
        show: "Mostrar",
        delete: "Borrar",
        bulkDelete: "Eliminar todos",
        list: "Lista"
    },
    buttons: {
        save: 'Guardar',
        addNewItem: 'Agregar ítem nuevo',
        filter: 'Filtrar',
        applyChanges: 'Aplicar cambios',
        resetFilter: 'Reiniciar',
        confirmRemovalMany: 'Confirmar la eliminación de el registro',
        confirmRemovalMany_plural: 'Confirmar la eliminación de los registros',
        logout: 'Cerrar sesión',
        login: 'Acceder',
        seeTheDocumentation: 'Ver: <1>la documentación</1>',
        createFirstRecord: 'Crear primer registro',
        cancel: 'Cancelar',
        confirm: 'Confirmar'
      },
      properties: {
        length: 'Longitud',
        from: 'De',
        to: 'A'
    },
    components:{
      Login: {
        welcomeHeader: 'Bienvenido a FitBite',
        welcomeMessage: ' Inicia sesión para continuar',
      },
    },

    resources: {},
    messages: {
    successfullyBulkDeleted: 'eliminado con éxito {{count}} registro',
    successfullyBulkDeleted_plural: 'eliminado con éxito {{count}} registros',
    successfullyDeleted: 'Registro dado eliminado con éxito',
    successfullyUpdated: 'Registro dado actualizado con éxito',
    thereWereValidationErrors: 'Hay errores de validación. Compruébelos a continuación.',
    forbiddenError: 'No puede realizar la acción {{actionName}} en {{resourceId}}',
    anyForbiddenError: 'No puede realizar la acción dada',
    successfullyCreated: 'Se creó con éxito un nuevo registro',
    bulkDeleteError: 'Hubo un error al eliminar los registros. Consulte la consola para ver más información.',
    errorFetchingRecords: 'Se produjo un error al obtener registros. Consulte la consola para ver más información.',
    errorFetchingRecord: 'Hubo un error al obtener el registro. Consulta la consola para ver más información.',
    noRecordsSelected: 'No ha seleccionado ningún registro',
    theseRecordsWillBeRemoved: 'Se eliminará el siguiente registro',
    theseRecordsWillBeRemoved_plural: 'Se eliminarán los siguientes registros',
    pickSomeFirstToRemove: 'Para eliminar registros, primero debe elegirlos',
    error404Resource: 'Recurso de identificación dada: {{resourceId}} no pudo ser encontrado',
    error404Action: 'Recurso de identificación dada: {{resourceId}} no tiene una acción con nombre: {{actionName}} ¡o usted no está autorizado a usarlo!',
    error404Record: 'Recurso de identificación dada: {{resourceId}} no tiene registro con id: {{recordId}} ¡o usted no está autorizado a usarlo!',
    seeConsoleForMore: 'Consulte la consola de desarrollo para obtener más detalles...',
    noActionComponent: 'Tienes que implementar el componente de acción para tu Acción',
    noRecordsInResource: 'No hay registros en este recurso',
    noRecords: 'No hay registros',
    confirmDelete: '¿Realmente desea eliminar este elemento?',
    welcomeOnBoard_title: '¡La bienvenida a bordo!',
    welcomeOnBoard_subtitle: '¡Ahora eres uno de nosotros! ',
    addingResources_title: 'Adición de recursos',
    addingResources_subtitle: 'Cómo agregar nuevos recursos a la barra lateral',
    customizeResources_title: 'Personalizar recursos',
    customizeResources_subtitle: 'Definición de comportamiento, adición de propiedades y más...',
    customizeActions_title: 'Personalizar acciones',
    customizeActions_subtitle: 'Modificación de acciones existentes y adición de nuevas',
    writeOwnComponents_title: 'Escribir componentes',
    writeOwnComponents_subtitle: 'Cómo modificar la apariencia de AdminJS',
    customDashboard_title: 'Tablero personalizado',
    customDashboard_subtitle: 'Cómo modificar esta vista y agregar nuevas páginas en la barra lateral',
    roleBasedAccess_title: 'Control de acceso basado en roles',
    roleBasedAccess_subtitle: 'Crear roles de usuario y permisos en AdminJS',
    community_title: 'Únete a la comunidad de holgura',
    community_subtitle: 'Hable con los creadores de AdminJS y otros usuarios de AdminJS',
    foundBug_title: '¿Encontraste un error? ',
    foundBug_subtitle: 'Plantear un problema en nuestro repositorio de GitHub',
    needMoreSolutions_title: '¿Necesita soluciones más avanzadas?',
    needMoreSolutions_subtitle: 'Estamos aquí para brindarle un hermoso diseño de UX/UI y un software personalizado basado (no solo) en AdminJS',
    invalidCredentials: 'Email y/o contraseña incorrectos',
    keyPlaceholder: 'LLAVE',
    valuePlaceholder: 'VALOR',
    initialKey: 'Llave-{{number}}',
    keyInUse: 'Las claves de objeto deben ser únicas.',
    keyValuePropertyDefaultDescription: 'Todos los valores se almacenan como texto. ',
    pageNotFound_title: 'Página no encontrada',
    pageNotFound_subtitle: 'Página <strong>"{{pageName}}"</strong> no existe',
    componentNotFound_title: 'Ningún componente especificado',
    componentNotFound_subtitle: 'Tienes que especificar el componente que representará este elemento.',


}

}


export const configUsers = { 
  properties: {
    email: {

    },
    gender: {
      availableValues: [
        { value: 'masculino', label: 'Masculino' },
        { value: 'femenino', label: 'Femenino' },
        { value: 'otro', label: 'Otro' }],
    },
    password: {
      type: 'password',
    }
  },
   
  }
