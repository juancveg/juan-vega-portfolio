$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Drawing

$root = Split-Path $PSScriptRoot -Parent
$portraitPath = Join-Path $root 'src/assets/profile.png'
$outputPath = Join-Path $root 'public/og-image.png'
$width = 1200
$height = 630

function New-RoundedPath([int]$X, [int]$Y, [int]$Width, [int]$Height, [int]$Radius) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
  $diameter = $Radius * 2
  $path.AddArc($X, $Y, $diameter, $diameter, 180, 90)
  $path.AddArc($X + $Width - $diameter, $Y, $diameter, $diameter, 270, 90)
  $path.AddArc($X + $Width - $diameter, $Y + $Height - $diameter, $diameter, $diameter, 0, 90)
  $path.AddArc($X, $Y + $Height - $diameter, $diameter, $diameter, 90, 90)
  $path.CloseFigure()
  return $path
}

$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.Clear([System.Drawing.Color]::FromArgb(239, 245, 240))

$meshColor = [System.Drawing.Color]::FromArgb(48, 37, 108, 88)
$meshPen = [System.Drawing.Pen]::new($meshColor, 2)
$points = @(
  [System.Drawing.Point]::new(75, 120), [System.Drawing.Point]::new(225, 65),
  [System.Drawing.Point]::new(380, 145), [System.Drawing.Point]::new(535, 74),
  [System.Drawing.Point]::new(690, 155), [System.Drawing.Point]::new(125, 290),
  [System.Drawing.Point]::new(285, 285), [System.Drawing.Point]::new(445, 265),
  [System.Drawing.Point]::new(615, 330), [System.Drawing.Point]::new(65, 485),
  [System.Drawing.Point]::new(230, 465), [System.Drawing.Point]::new(400, 445),
  [System.Drawing.Point]::new(565, 500), [System.Drawing.Point]::new(735, 465)
)
$edges = @(
  @(0, 1), @(1, 2), @(2, 3), @(3, 4), @(0, 5), @(1, 5), @(1, 6),
  @(2, 6), @(2, 7), @(3, 7), @(3, 8), @(4, 8), @(5, 6), @(6, 7),
  @(7, 8), @(5, 9), @(5, 10), @(6, 10), @(6, 11), @(7, 11), @(7, 12),
  @(8, 12), @(8, 13), @(9, 10), @(10, 11), @(11, 12), @(12, 13)
)
foreach ($edge in $edges) {
  $graphics.DrawLine($meshPen, $points[$edge[0]], $points[$edge[1]])
}

for ($index = 0; $index -lt $points.Count; $index++) {
  $point = $points[$index]
  $nodeColor = if ($index -in @(2, 7, 11)) {
    [System.Drawing.Color]::FromArgb(220, 37, 150, 111)
  } else {
    [System.Drawing.Color]::FromArgb(150, 91, 142, 124)
  }
  $nodeBrush = [System.Drawing.SolidBrush]::new($nodeColor)
  $size = if ($index -in @(2, 7, 11)) { 10 } else { 6 }
  $graphics.FillEllipse($nodeBrush, $point.X - $size / 2, $point.Y - $size / 2, $size, $size)
  $nodeBrush.Dispose()
}

$portrait = [System.Drawing.Image]::FromFile($portraitPath)
$backingPath = New-RoundedPath 765 28 410 574 30
$backingBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(24, 61, 54))
$graphics.FillPath($backingBrush, $backingPath)

$photoPath = New-RoundedPath 783 46 374 538 22
$graphics.SetClip($photoPath)
$graphics.DrawImage(
  $portrait,
  [System.Drawing.Rectangle]::new(783, 46, 374, 538),
  [System.Drawing.Rectangle]::new(180, 195, 995, 1430),
  [System.Drawing.GraphicsUnit]::Pixel
)
$graphics.ResetClip()

$borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(210, 255, 255, 255), 2)
$graphics.DrawPath($borderPen, $photoPath)

$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$borderPen.Dispose()
$photoPath.Dispose()
$backingBrush.Dispose()
$backingPath.Dispose()
$portrait.Dispose()
$meshPen.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Output "Created $outputPath ($width x $height)"