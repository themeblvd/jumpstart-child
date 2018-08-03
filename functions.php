<?php
/**
 * Include Theme Blvd framework.
 */
require_once( get_template_directory() . '/framework/themeblvd.php' );

/**
 * Maintain options ID for saved options from parent
 * theme.
 *
 * This allows you to switch between parent and child theme,
 * with your theme options remaining saved to the same value
 * in your WordPress database.
 *
 * @param  string $id Current option ID.
 * @return string     Modified option ID.
 */
function jumpstart_option_id( $id ) {

    return 'jumpstart';

}
add_filter( 'themeblvd_option_id', 'jumpstart_option_id' );
