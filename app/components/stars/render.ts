import { Svg, SVG } from "@svgdotjs/svg.js";
import type { StarSystem } from "./star";
import type { NonViablePlanet, ViablePlanet } from "./planet";


export function RenderStarSystem(starSystem: StarSystem) {
    const width = 550
    const height = 425

    const gapBetweenElements = 5
    const gapBetweenBodies = 20
    const centerY = Math.floor(height / 2)
    const starSize = 170
    const jovianSize = 70
    const planetSize = 25
    const labelLineLength = 40
    const fontSizeHeader = 20
    const fontSizeLabel = 12

    const jovianColor = "#C97E4D"
    const dysbaricColor = "#D4A017"
    const habitableColor = "#3DAEF5"
    const barrenColor = "#7D7D7D"
    const fontColor = "white"

    let drawing = SVG().size(width, height)

    drawing.circle(starSize).cy(centerY).cx(0).fill(starSystem.type.color)
    drawing.text(starSystem.name).move(10, 10).stroke({ color: fontColor }).fill({ color: fontColor }).font({ size: fontSizeHeader })

    let nextOffset = starSize / 2
    let lastLineDirection = 1

    for (let index = 0; index < starSystem.planets.length; index++) {
        const planet = starSystem.planets[index];

        let color = barrenColor // default
        let size = planetSize // default

        if (planet === undefined) {
            continue
        }

        if ("type" in planet) {
            const planetTyped: NonViablePlanet = planet

            if (planet.type === "Jovian") {
                size = jovianSize
                color = jovianColor
            }

            if (planet.type === "Barren") {
                color = barrenColor
            }

            if (planet.type === "Dysbaric") {
                color = dysbaricColor
            }
        }

        if ("atmosphere" in planet) {
            const planetTyped: ViablePlanet = planet

            color = habitableColor
        }

        const centerX = gapBetweenBodies + nextOffset + (size / 2)
        let lineY1 = centerY + (size / 2) + gapBetweenElements
        let lineY2 = centerY + (size / 2) + gapBetweenElements + labelLineLength

        if (lastLineDirection < 0) {
            lineY1 = centerY - (size / 2) - gapBetweenElements
            lineY2 = centerY - (size / 2) - gapBetweenElements - labelLineLength
        }

        drawing.circle(size).cy(centerY).cx(centerX).fill(color)
        drawing.line(centerX, lineY1, centerX, lineY2).stroke({ width: 1, color: fontColor })
        let labelText = drawing.text(planet.name).move(centerX, lineY2).stroke({ color: fontColor }).fill({ color: fontColor }).font({ size: fontSizeLabel, anchor: "middle" })

        if (lastLineDirection < 0) {
            labelText.move(labelText.x(), Number(labelText.y()) - (fontSizeLabel * 2))
        }

        nextOffset = nextOffset + gapBetweenBodies + size
        lastLineDirection = lastLineDirection * -1
    }

    return drawing
}
