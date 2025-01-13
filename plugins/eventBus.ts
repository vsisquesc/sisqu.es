import mitt from "mitt"

// Plugin que expone un bus de eventos global
export default defineNuxtPlugin(() => {
  const emitter = mitt()

  return {
    provide: {
      // Emite el evento
      emit: emitter.emit,
      // Registra un listener para un evento
      listen: emitter.on,
    },
  }
})
