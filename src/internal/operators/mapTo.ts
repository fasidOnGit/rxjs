import { OperatorFunction } from '../types';
import { map } from './map';

export function mapTo<R>(value: R): OperatorFunction<any, R>;
/** @deprecated Do not specify explicit type parameters. Signatures with type parameters that cannot be inferred will be removed in v8. */
export function mapTo<T, R>(value: R): OperatorFunction<T, R>;

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * ![](mapTo.png)
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * ## Example
 *
 * Map every click to the string `'Hi'`
 *
 * ```ts
 * import { fromEvent, mapTo } from 'rxjs';
 *
 * const clicks = fromEvent(document, 'click');
 * const greetings = clicks.pipe(mapTo('Hi'));
 *
 * greetings.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link map}
 *
 * @param value The value to map each source value to.
 * @return A function that returns an Observable that emits the given `value`
 * every time the source Observable emits.
 */
export function mapTo<R>(value: R): OperatorFunction<any, R> {
  return map(() => value);
}
