import { UseCaseResponder } from './../UseCase';

export interface Responder extends UseCaseResponder {
  localesCleaned(refLocale: any, cleanedLocales: any[]): void;
  cannotCleanLocales(e: Error): void;
}
