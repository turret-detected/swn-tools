import { GenerateStarSystem, type StarSystem } from "./star"

export const useStarStore = defineStore("stars", {
    state: () => {
        return {
            starSystem: null as StarSystem | null,
            pastSystems: [] as StarSystem[],
            futureSystems: [] as StarSystem[],
        }
    },
    getters: {
        getStarSystem(): StarSystem | null {
            return this.starSystem
        }
    },
    actions: {
        generate() {
            if (this.starSystem) {
                this.pastSystems.push(this.starSystem)
            }
            const starSystem = GenerateStarSystem()
            if (starSystem) {
                this.starSystem = starSystem
            }
            this.futureSystems = []
            this.cleanup()
        },
        undo() {
            const starSystem = this.pastSystems.pop()
            if (starSystem) {
                if (this.starSystem) {
                    this.futureSystems.push(this.starSystem)
                }
                this.starSystem = starSystem
            }
            this.cleanup()
        },
        redo() {
            const starSystem = this.futureSystems.pop()
            if (starSystem) {
                if (this.starSystem) {
                    this.pastSystems.push(this.starSystem)
                }
                this.starSystem = starSystem
            }
            this.cleanup()
        },
        cleanup() {
            // to keep storage from getting too big we only support going back and forth 10 entries
            if (this.pastSystems.length > 10) {
                this.pastSystems = this.pastSystems.slice(-10)
            }
            if (this.futureSystems.length > 10) {
                this.futureSystems = this.futureSystems.slice(-10)
            }
        }
    },
    persist: true
})