'use client'
import { useEffect, useLayoutEffect, useRef } from 'react'
import * as t from 'three'


export function ThreeJsModel() {
    const scene = new t.Scene()
    const geometry = new t.SphereGeometry(3, 64, 64)
    const material = new t.MeshStandardMaterial({ color: '#00ff83' })
    const mesh = new t.Mesh(geometry, material)
    scene.add(mesh)

    const light = new t.PointLight("#ffffff", 1, 100)
    light.position.set(0, 10, 10)
    scene.add(light)

    const camera = new t.PerspectiveCamera(45, 300, 300)
    camera.position.z = 20
    scene.add(camera)

    const canvas = document.createElement('canvas')
    const renderer = new t.WebGLRenderer({ canvas })
    renderer.setSize(300, 300)
    renderer.render(scene, camera)

    useLayoutEffect(() => {
        document.querySelector('#ThreeJsModelContainer')?.appendChild(canvas)
    }, [canvas])

    return <div id="ThreeJsModelContainer"></div>
    
}