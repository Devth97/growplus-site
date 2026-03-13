import { build } from 'vite'

console.log("Starting build...");
try {
    await build()
    console.log('Build success')
} catch (e) {
    console.error('Build failed');
    console.error(e);
    process.exit(1)
}
