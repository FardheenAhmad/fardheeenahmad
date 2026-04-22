export default function SectionBackdrop({ theme }) {
  if (!theme) return null

  const { tint, gridOpacity = 0.25, orbs = [] } = theme

  return (
    <>
      {tint && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: tint }}
        />
      )}
      <div
        className="absolute inset-0 bg-grid pointer-events-none"
        style={{ opacity: gridOpacity }}
      />
      {orbs.map((orb, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={`absolute rounded-full blur-3xl pointer-events-none ${orb.className ?? ''}`}
          style={{ background: orb.background, opacity: orb.opacity ?? 1 }}
        />
      ))}
    </>
  )
}

