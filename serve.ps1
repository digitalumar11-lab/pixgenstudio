# PixGen Studio 3D Portfolio - Local Development Server
# Written in PowerShell using .NET System.Net.HttpListener

$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host " PIXGEN STUDIO 3D LOCAL DEV SERVER IS ONLINE " -ForegroundColor Magenta -BackgroundColor Black
    Write-Host " Serving files from: $(Get-Location)" -ForegroundColor Gray
    Write-Host " Open your browser and navigate to:" -ForegroundColor Gray
    Write-Host " ---> http://localhost:$port/ <---" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C in this terminal to stop the server." -ForegroundColor Yellow
} catch {
    Write-Error "Failed to start server: $_"
    exit
}

$currentDir = Get-Location

# Listen loop
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        # Default to index.html
        if ($rawUrl -eq "/" -or $rawUrl -eq "") {
            $urlPath = "index.html"
        } else {
            $urlPath = $rawUrl.TrimStart('/')
            # Strip query strings/cache-busting parameters
            if ($urlPath.Contains('?')) {
                $urlPath = $urlPath.Substring(0, $urlPath.IndexOf('?'))
            }
            if ($urlPath.Contains('#')) {
                $urlPath = $urlPath.Substring(0, $urlPath.IndexOf('#'))
            }
        }

        # Handle forward slashes in URL on Windows paths
        $urlPath = $urlPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = Join-Path $currentDir $urlPath

        if (Test-Path $filePath -PathType Leaf) {
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($extension) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # File Not Found
            $response.StatusCode = 404
            $errorHtml = "<html><body style='background:#030712;color:#f3f4f6;font-family:sans-serif;padding:3rem;text-align:center;'><h2>404 File Not Found</h2><p>Could not resolve: $urlPath</p></body></html>"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorHtml)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        }
        $response.Close()
    } catch {
        # Catch listener stops or socket resets
    }
}
