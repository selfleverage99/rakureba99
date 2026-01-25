declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

type EventName =
  | 'cta_click'
  | 'form_open'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'roi_calculate'

interface TrackEventParams {
  event: EventName
  cta_type?: string
  cta_location?: string
  form_type?: string
  [key: string]: unknown
}

export function trackEvent(params: TrackEventParams): void {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    ...params,
    timestamp: new Date().toISOString(),
  })

  // デバッグ用（本番では削除可能）
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', params)
  }
}

export function trackCtaClick(ctaType: string, location: string): void {
  trackEvent({
    event: 'cta_click',
    cta_type: ctaType,
    cta_location: location,
  })
}

export function trackFormOpen(formType: string): void {
  trackEvent({
    event: 'form_open',
    form_type: formType,
  })
}

export function trackFormSubmit(formType: string): void {
  trackEvent({
    event: 'form_submit',
    form_type: formType,
  })
}

export function trackFormSuccess(formType: string): void {
  trackEvent({
    event: 'form_success',
    form_type: formType,
  })
}

export function trackFormError(formType: string, error: string): void {
  trackEvent({
    event: 'form_error',
    form_type: formType,
    error_message: error,
  })
}

export function trackRoiCalculate(inputs: Record<string, number>, results: Record<string, number>): void {
  trackEvent({
    event: 'roi_calculate',
    ...inputs,
    ...results,
  })
}
