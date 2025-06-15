// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    type byte = number
    type int32 = number
    type int64 = number /* || bigint */
    type float32 = number
    type float64 = number
    type StringName = string
    type unresolved = any
    type GAny = boolean | int64 | float64 | string | Vector2 | Vector2i | Rect2 | Rect2i | Vector3 | Vector3i | Transform2D | Vector4 | Vector4i | Plane | Quaternion | AABB | Basis | Transform3D | Projection | Color | StringName | NodePath | RID | Object | Callable | Signal | GDictionary | GArray | PackedByteArray | PackedInt32Array | PackedInt64Array | PackedFloat32Array | PackedFloat64Array | PackedStringArray | PackedVector2Array | PackedVector3Array | PackedColorArray | PackedVector4Array | undefined
    // _singleton_class_: Performance
    namespace Performance {
        enum Monitor {
            /** The number of frames rendered in the last second. This metric is only updated once per second, even if queried more often.  *Higher is better.*  */
            TIME_FPS = 0,
            
            /** Time it took to complete one frame, in seconds.  *Lower is better.*  */
            TIME_PROCESS = 1,
            
            /** Time it took to complete one physics frame, in seconds.  *Lower is better.*  */
            TIME_PHYSICS_PROCESS = 2,
            
            /** Time it took to complete one navigation step, in seconds. This includes navigation map updates as well as agent avoidance calculations.  *Lower is better.*  */
            TIME_NAVIGATION_PROCESS = 3,
            
            /** Static memory currently used, in bytes. Not available in release builds.  *Lower is better.*  */
            MEMORY_STATIC = 4,
            
            /** Available static memory. Not available in release builds.  *Lower is better.*  */
            MEMORY_STATIC_MAX = 5,
            
            /** Largest amount of memory the message queue buffer has used, in bytes. The message queue is used for deferred functions calls and notifications.  *Lower is better.*  */
            MEMORY_MESSAGE_BUFFER_MAX = 6,
            
            /** Number of objects currently instantiated (including nodes).  *Lower is better.*  */
            OBJECT_COUNT = 7,
            
            /** Number of resources currently used.  *Lower is better.*  */
            OBJECT_RESOURCE_COUNT = 8,
            
            /** Number of nodes currently instantiated in the scene tree. This also includes the root node.  *Lower is better.*  */
            OBJECT_NODE_COUNT = 9,
            
            /** Number of orphan nodes, i.e. nodes which are not parented to a node of the scene tree.  *Lower is better.*  */
            OBJECT_ORPHAN_NODE_COUNT = 10,
            
            /** The total number of objects in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling).  *Lower is better.*  */
            RENDER_TOTAL_OBJECTS_IN_FRAME = 11,
            
            /** The total number of vertices or indices rendered in the last rendered frame. This metric doesn't include primitives from culled objects (either via hiding nodes, frustum culling or occlusion culling). Due to the depth prepass and shadow passes, the number of primitives is always higher than the actual number of vertices in the scene (typically double or triple the original vertex count).  *Lower is better.*  */
            RENDER_TOTAL_PRIMITIVES_IN_FRAME = 12,
            
            /** The total number of draw calls performed in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling), since they do not result in draw calls.  *Lower is better.*  */
            RENDER_TOTAL_DRAW_CALLS_IN_FRAME = 13,
            
            /** The amount of video memory used (texture and vertex memory combined, in bytes). Since this metric also includes miscellaneous allocations, this value is always greater than the sum of [constant RENDER_TEXTURE_MEM_USED] and [constant RENDER_BUFFER_MEM_USED].  *Lower is better.*  */
            RENDER_VIDEO_MEM_USED = 14,
            
            /** The amount of texture memory used (in bytes).  *Lower is better.*  */
            RENDER_TEXTURE_MEM_USED = 15,
            
            /** The amount of render buffer memory used (in bytes).  *Lower is better.*  */
            RENDER_BUFFER_MEM_USED = 16,
            
            /** Number of active [RigidBody2D] nodes in the game.  *Lower is better.*  */
            PHYSICS_2D_ACTIVE_OBJECTS = 17,
            
            /** Number of collision pairs in the 2D physics engine.  *Lower is better.*  */
            PHYSICS_2D_COLLISION_PAIRS = 18,
            
            /** Number of islands in the 2D physics engine.  *Lower is better.*  */
            PHYSICS_2D_ISLAND_COUNT = 19,
            
            /** Number of active [RigidBody3D] and [VehicleBody3D] nodes in the game.  *Lower is better.*  */
            PHYSICS_3D_ACTIVE_OBJECTS = 20,
            
            /** Number of collision pairs in the 3D physics engine.  *Lower is better.*  */
            PHYSICS_3D_COLLISION_PAIRS = 21,
            
            /** Number of islands in the 3D physics engine.  *Lower is better.*  */
            PHYSICS_3D_ISLAND_COUNT = 22,
            
            /** Output latency of the [AudioServer]. Equivalent to calling [method AudioServer.get_output_latency], it is not recommended to call this every frame. */
            AUDIO_OUTPUT_LATENCY = 23,
            
            /** Number of active navigation maps in the [NavigationServer3D]. This also includes the two empty default navigation maps created by World2D and World3D. */
            NAVIGATION_ACTIVE_MAPS = 24,
            
            /** Number of active navigation regions in the [NavigationServer3D]. */
            NAVIGATION_REGION_COUNT = 25,
            
            /** Number of active navigation agents processing avoidance in the [NavigationServer3D]. */
            NAVIGATION_AGENT_COUNT = 26,
            
            /** Number of active navigation links in the [NavigationServer3D]. */
            NAVIGATION_LINK_COUNT = 27,
            
            /** Number of navigation mesh polygons in the [NavigationServer3D]. */
            NAVIGATION_POLYGON_COUNT = 28,
            
            /** Number of navigation mesh polygon edges in the [NavigationServer3D]. */
            NAVIGATION_EDGE_COUNT = 29,
            
            /** Number of navigation mesh polygon edges that were merged due to edge key overlap in the [NavigationServer3D]. */
            NAVIGATION_EDGE_MERGE_COUNT = 30,
            
            /** Number of polygon edges that are considered connected by edge proximity [NavigationServer3D]. */
            NAVIGATION_EDGE_CONNECTION_COUNT = 31,
            
            /** Number of navigation mesh polygon edges that could not be merged in the [NavigationServer3D]. The edges still may be connected by edge proximity or with links. */
            NAVIGATION_EDGE_FREE_COUNT = 32,
            
            /** Represents the size of the [enum Monitor] enum. */
            MONITOR_MAX = 33,
        }
    }
    /** Exposes performance-related data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_performance.html  
     */
    class Performance extends Object {
        /** Returns the value of one of the available built-in monitors. You should provide one of the [enum Monitor] constants as the argument, like this:  
         *    
         *  See [method get_custom_monitor] to query custom performance monitors' values.  
         */
        static get_monitor(monitor: Performance.Monitor): float64
        
        /** Adds a custom monitor with the name [param id]. You can specify the category of the monitor using slash delimiters in [param id] (for example: `"Game/NumberOfNPCs"`). If there is more than one slash delimiter, then the default category is used. The default category is `"Custom"`. Prints an error if given [param id] is already present.  
         *    
         *  The debugger calls the callable to get the value of custom monitor. The callable must return a zero or positive integer or floating-point number.  
         *  Callables are called with arguments supplied in argument array.  
         */
        static add_custom_monitor(id: StringName, callable: Callable, arguments_: GArray = []): void
        
        /** Removes the custom monitor with given [param id]. Prints an error if the given [param id] is already absent. */
        static remove_custom_monitor(id: StringName): void
        
        /** Returns `true` if custom monitor with the given [param id] is present, `false` otherwise. */
        static has_custom_monitor(id: StringName): boolean
        
        /** Returns the value of custom monitor with given [param id]. The callable is called to get the value of custom monitor. See also [method has_custom_monitor]. Prints an error if the given [param id] is absent. */
        static get_custom_monitor(id: StringName): any
        
        /** Returns the last tick in which custom monitor was added/removed (in microseconds since the engine started). This is set to [method Time.get_ticks_usec] when the monitor is updated. */
        static get_monitor_modification_time(): int64
        
        /** Returns the names of active custom monitors in an [Array]. */
        static get_custom_monitor_names(): GArray
    }
    // _singleton_class_: TextServerManager
    /** A singleton for managing [TextServer] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_textservermanager.html  
     */
    class TextServerManager extends Object {
        /** Registers a [TextServer] interface. */
        static add_interface(interface: TextServer): void
        
        /** Returns the number of interfaces currently registered. */
        static get_interface_count(): int64
        
        /** Removes an interface. All fonts and shaped text caches should be freed before removing an interface. */
        static remove_interface(interface: TextServer): void
        
        /** Returns the interface registered at a given index. */
        static get_interface(idx: int64): TextServer
        
        /** Returns a list of available interfaces, with the index and name of each interface. */
        static get_interfaces(): GArray
        
        /** Finds an interface by its [param name]. */
        static find_interface(name: string): TextServer
        
        /** Sets the primary [TextServer] interface. */
        static set_primary_interface(index: TextServer): void
        
        /** Returns the primary [TextServer] interface currently in use. */
        static get_primary_interface(): TextServer
        
        /** Emitted when a new interface has been added. */
        static readonly interface_added: Signal1<StringName>
        
        /** Emitted when an interface is removed. */
        static readonly interface_removed: Signal1<StringName>
    }
    // _singleton_class_: PhysicsServer2DManager
    /** A singleton for managing [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_physicsserver2dmanager.html  
     */
    class PhysicsServer2DManager extends Object {
        /** Register a [PhysicsServer2D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer2D] object. */
        static register_server(name: string, create_callback: Callable): void
        
        /** Set the default [PhysicsServer2D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static set_default_server(name: string, priority: int64): void
    }
    // _singleton_class_: PhysicsServer3DManager
    /** A singleton for managing [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_physicsserver3dmanager.html  
     */
    class PhysicsServer3DManager extends Object {
        /** Register a [PhysicsServer3D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer3D] object. */
        static register_server(name: string, create_callback: Callable): void
        
        /** Set the default [PhysicsServer3D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static set_default_server(name: string, priority: int64): void
    }
    // _singleton_class_: ProjectSettings
    /** Stores globally-accessible variables.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_projectsettings.html  
     */
    class ProjectSettings extends Object {
        /** Returns `true` if a configuration value is present. */
        static has_setting(name: string): boolean
        
        /** Sets the value of a setting.  
         *  **Example:**  
         *    
         *  This can also be used to erase custom project settings. To do this change the setting value to `null`.  
         */
        static set_setting(name: string, value: any): void
        
        /** Returns the value of the setting identified by [param name]. If the setting doesn't exist and [param default_value] is specified, the value of [param default_value] is returned. Otherwise, `null` is returned.  
         *  **Example:**  
         *    
         *      
         *  **Note:** This method doesn't take potential feature overrides into account automatically. Use [method get_setting_with_override] to handle seamlessly.  
         */
        static get_setting(name: string, default_value: any = <any> {}): any
        
        /** Similar to [method get_setting], but applies feature tag overrides if any exists and is valid.  
         *  **Example:**  
         *  If the following setting override exists "application/config/name.windows", and the following code is executed:  
         *    
         *  Then the overridden setting will be returned instead if the project is running on the  *Windows*  operating system.  
         */
        static get_setting_with_override(name: StringName): any
        
        /** Returns an [Array] of registered global classes. Each global class is represented as a [Dictionary] that contains the following entries:  
         *  - `base` is a name of the base class;  
         *  - `class` is a name of the registered global class;  
         *  - `icon` is a path to a custom icon of the global class, if it has any;  
         *  - `language` is a name of a programming language in which the global class is written;  
         *  - `path` is a path to a file containing the global class.  
         *      
         *  **Note:** Both the script and the icon paths are local to the project filesystem, i.e. they start with `res://`.  
         */
        static get_global_class_list(): GArray
        
        /** Sets the order of a configuration value (influences when saved to the config file). */
        static set_order(name: string, position: int64): void
        
        /** Returns the order of a configuration value (influences when saved to the config file). */
        static get_order(name: string): int64
        
        /** Sets the specified setting's initial value. This is the value the setting reverts to. */
        static set_initial_value(name: string, value: any): void
        
        /** Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option. */
        static set_as_basic(name: string, basic: boolean): void
        
        /** Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user. */
        static set_as_internal(name: string, internal: boolean): void
        
        /** Adds a custom property info to a property. The dictionary must contain:  
         *  - `"name"`: [String] (the property's name)  
         *  - `"type"`: [int] (see [enum Variant.Type])  
         *  - optionally `"hint"`: [int] (see [enum PropertyHint]) and `"hint_string"`: [String]  
         *  **Example:**  
         *    
         */
        static add_property_info(hint: GDictionary): void
        
        /** Sets whether a setting requires restarting the editor to properly take effect.  
         *      
         *  **Note:** This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling [method set_restart_if_changed] does  *not*  delay the setting being set when changed.  
         */
        static set_restart_if_changed(name: string, restart: boolean): void
        
        /** Clears the whole configuration (not recommended, may break things). */
        static clear(name: string): void
        
        /** Returns the localized path (starting with `res://`) corresponding to the absolute, native OS [param path]. See also [method globalize_path]. */
        static localize_path(path: string): string
        
        /** Returns the absolute, native OS path corresponding to the localized [param path] (starting with `res://` or `user://`). The returned path will vary depending on the operating system and user preferences. See [url=https://docs.godotengine.org/en/4.3/tutorials/io/data_paths.html]File paths in Godot projects[/url] to see what those paths convert to. See also [method localize_path].  
         *      
         *  **Note:** [method globalize_path] with `res://` will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:  
         *    
         */
        static globalize_path(path: string): string
        
        /** Saves the configuration to the `project.godot` file.  
         *      
         *  **Note:** This method is intended to be used by editor plugins, as modified [ProjectSettings] can't be loaded back in the running app. If you want to change project settings in exported projects, use [method save_custom] to save `override.cfg` file.  
         */
        static save(): GError
        
        /** Loads the contents of the .pck or .zip file specified by [param pack] into the resource filesystem (`res://`). Returns `true` on success.  
         *      
         *  **Note:** If a file from [param pack] shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from [param pack] unless [param replace_files] is set to `false`.  
         *      
         *  **Note:** The optional [param offset] parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.  
         */
        static load_resource_pack(pack: string, replace_files: boolean = true, offset: int64 = 0): boolean
        
        /** Saves the configuration to a custom file. The file extension must be `.godot` (to save in text-based [ConfigFile] format) or `.binary` (to save in binary format). You can also save `override.cfg` file, which is also text, but can be used in exported projects unlike other formats. */
        static save_custom(file: string): GError
        
        /** Emitted when any setting is changed, up to once per process frame. */
        static readonly settings_changed: Signal0
    }
    // _singleton_class_: IP
    namespace IP {
        enum ResolverStatus {
            /** DNS hostname resolver status: No status. */
            RESOLVER_STATUS_NONE = 0,
            
            /** DNS hostname resolver status: Waiting. */
            RESOLVER_STATUS_WAITING = 1,
            
            /** DNS hostname resolver status: Done. */
            RESOLVER_STATUS_DONE = 2,
            
            /** DNS hostname resolver status: Error. */
            RESOLVER_STATUS_ERROR = 3,
        }
        enum Type {
            /** Address type: None. */
            TYPE_NONE = 0,
            
            /** Address type: Internet protocol version 4 (IPv4). */
            TYPE_IPV4 = 1,
            
            /** Address type: Internet protocol version 6 (IPv6). */
            TYPE_IPV6 = 2,
            
            /** Address type: Any. */
            TYPE_ANY = 3,
        }
    }
    /** Internet protocol (IP) support functions such as DNS resolution.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_ip.html  
     */
    class IP extends Object {
        /** Maximum number of concurrent DNS resolver queries allowed, [constant RESOLVER_INVALID_ID] is returned if exceeded. */
        static readonly RESOLVER_MAX_QUERIES = 256
        
        /** Invalid ID constant. Returned if [constant RESOLVER_MAX_QUERIES] is exceeded. */
        static readonly RESOLVER_INVALID_ID = -1
        
        /** Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the [enum Type] constant given as [param ip_type]. */
        static resolve_hostname(host: string, ip_type: IP.Type = 3): string
        
        /** Resolves a given hostname in a blocking way. Addresses are returned as an [Array] of IPv4 or IPv6 addresses depending on [param ip_type]. */
        static resolve_hostname_addresses(host: string, ip_type: IP.Type = 3): PackedStringArray
        
        /** Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the [enum Type] constant given as [param ip_type]. Returns the queue ID if successful, or [constant RESOLVER_INVALID_ID] on error. */
        static resolve_hostname_queue_item(host: string, ip_type: IP.Type = 3): int64
        
        /** Returns a queued hostname's status as a [enum ResolverStatus] constant, given its queue [param id]. */
        static get_resolve_item_status(id: int64): IP.ResolverStatus
        
        /** Returns a queued hostname's IP address, given its queue [param id]. Returns an empty string on error or if resolution hasn't happened yet (see [method get_resolve_item_status]). */
        static get_resolve_item_address(id: int64): string
        
        /** Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see [method get_resolve_item_status]). */
        static get_resolve_item_addresses(id: int64): GArray
        
        /** Removes a given item [param id] from the queue. This should be used to free a queue after it has completed to enable more queries to happen. */
        static erase_resolve_item(id: int64): void
        
        /** Returns all the user's current IPv4 and IPv6 addresses as an array. */
        static get_local_addresses(): PackedStringArray
        
        /** Returns all network adapters as an array.  
         *  Each adapter is a dictionary of the form:  
         *    
         */
        static get_local_interfaces(): GArray
        
        /** Removes all of a [param hostname]'s cached references. If no [param hostname] is given, all cached IP addresses are removed. */
        static clear_cache(hostname: string = ''): void
    }
    // _singleton_class_: Geometry2D
    namespace Geometry2D {
        enum PolyBooleanOperation {
            /** Create regions where either subject or clip polygons (or both) are filled. */
            OPERATION_UNION = 0,
            
            /** Create regions where subject polygons are filled except where clip polygons are filled. */
            OPERATION_DIFFERENCE = 1,
            
            /** Create regions where both subject and clip polygons are filled. */
            OPERATION_INTERSECTION = 2,
            
            /** Create regions where either subject or clip polygons are filled but not where both are filled. */
            OPERATION_XOR = 3,
        }
        enum PolyJoinType {
            /** Squaring is applied uniformally at all convex edge joins at `1 * delta`. */
            JOIN_SQUARE = 0,
            
            /** While flattened paths can never perfectly trace an arc, they are approximated by a series of arc chords. */
            JOIN_ROUND = 1,
            
            /** There's a necessary limit to mitered joins since offsetting edges that join at very acute angles will produce excessively long and narrow "spikes". For any given edge join, when miter offsetting would exceed that maximum distance, "square" joining is applied. */
            JOIN_MITER = 2,
        }
        enum PolyEndType {
            /** Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polygon. */
            END_POLYGON = 0,
            
            /** Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polyline. */
            END_JOINED = 1,
            
            /** Endpoints are squared off with no extension. */
            END_BUTT = 2,
            
            /** Endpoints are squared off and extended by `delta` units. */
            END_SQUARE = 3,
            
            /** Endpoints are rounded off and extended by `delta` units. */
            END_ROUND = 4,
        }
    }
    /** Provides methods for some common 2D geometric operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_geometry2d.html  
     */
    class Geometry2D extends Object {
        /** Returns `true` if [param point] is inside the circle or if it's located exactly  *on*  the circle's boundary, otherwise returns `false`. */
        static is_point_in_circle(point: Vector2, circle_position: Vector2, circle_radius: float64): boolean
        
        /** Given the 2D segment ([param segment_from], [param segment_to]), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position [param circle_position] and has radius [param circle_radius]. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not). */
        static segment_intersects_circle(segment_from: Vector2, segment_to: Vector2, circle_position: Vector2, circle_radius: float64): float64
        
        /** Checks if the two segments ([param from_a], [param to_a]) and ([param from_b], [param to_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns `null`. */
        static segment_intersects_segment(from_a: Vector2, to_a: Vector2, from_b: Vector2, to_b: Vector2): any
        
        /** Checks if the two lines ([param from_a], [param dir_a]) and ([param from_b], [param dir_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns `null`.  
         *      
         *  **Note:** The lines are specified using direction vectors, not end points.  
         */
        static line_intersects_line(from_a: Vector2, dir_a: Vector2, from_b: Vector2, dir_b: Vector2): any
        
        /** Given the two 2D segments ([param p1], [param q1]) and ([param p2], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector2Array] that contains this point on ([param p1], [param q1]) as well the accompanying point on ([param p2], [param q2]). */
        static get_closest_points_between_segments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array
        
        /** Returns the 2D point on the 2D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static get_closest_point_to_segment(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        
        /** Returns the 2D point on the 2D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static get_closest_point_to_segment_uncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        
        /** Returns if [param point] is inside the triangle specified by [param a], [param b] and [param c]. */
        static point_is_inside_triangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean
        
        /** Returns `true` if [param polygon]'s vertices are ordered in clockwise order, otherwise returns `false`.  
         *      
         *  **Note:** Assumes a Cartesian coordinate system where `+x` is right and `+y` is up. If using screen coordinates (`+y` is down), the result will need to be flipped (i.e. a `true` result will indicate counter-clockwise).  
         */
        static is_polygon_clockwise(polygon: PackedVector2Array | Vector2[]): boolean
        
        /** Returns `true` if [param point] is inside [param polygon] or if it's located exactly  *on*  polygon's boundary, otherwise returns `false`. */
        static is_point_in_polygon(point: Vector2, polygon: PackedVector2Array | Vector2[]): boolean
        
        /** Triangulates the polygon specified by the points in [param polygon]. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param polygon] (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulate_polygon(polygon: PackedVector2Array | Vector2[]): PackedInt32Array
        
        /** Triangulates the area specified by discrete set of [param points] such that no point is inside the circumcircle of any resulting triangle. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param points] (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulate_delaunay(points: PackedVector2Array | Vector2[]): PackedInt32Array
        
        /** Given an array of [Vector2]s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one. */
        static convex_hull(points: PackedVector2Array | Vector2[]): PackedVector2Array
        
        /** Decomposes the [param polygon] into multiple convex hulls and returns an array of [PackedVector2Array]. */
        static decompose_polygon_in_convex(polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Merges (combines) [param polygon_a] and [param polygon_b] and returns an array of merged polygons. This performs [constant OPERATION_UNION] between polygons.  
         *  The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static merge_polygons(polygon_a: PackedVector2Array | Vector2[], polygon_b: PackedVector2Array | Vector2[]): GArray
        
        /** Clips [param polygon_a] against [param polygon_b] and returns an array of clipped polygons. This performs [constant OPERATION_DIFFERENCE] between polygons. Returns an empty array if [param polygon_b] completely overlaps [param polygon_a].  
         *  If [param polygon_b] is enclosed by [param polygon_a], returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static clip_polygons(polygon_a: PackedVector2Array | Vector2[], polygon_b: PackedVector2Array | Vector2[]): GArray
        
        /** Intersects [param polygon_a] with [param polygon_b] and returns an array of intersected polygons. This performs [constant OPERATION_INTERSECTION] between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static intersect_polygons(polygon_a: PackedVector2Array | Vector2[], polygon_b: PackedVector2Array | Vector2[]): GArray
        
        /** Mutually excludes common area defined by intersection of [param polygon_a] and [param polygon_b] (see [method intersect_polygons]) and returns an array of excluded polygons. This performs [constant OPERATION_XOR] between polygons. In other words, returns all but common area between polygons.  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static exclude_polygons(polygon_a: PackedVector2Array | Vector2[], polygon_b: PackedVector2Array | Vector2[]): GArray
        
        /** Clips [param polyline] against [param polygon] and returns an array of clipped polylines. This performs [constant OPERATION_DIFFERENCE] between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape. */
        static clip_polyline_with_polygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Intersects [param polyline] with [param polygon] and returns an array of intersected polylines. This performs [constant OPERATION_INTERSECTION] between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape. */
        static intersect_polyline_with_polygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Inflates or deflates [param polygon] by [param delta] units (pixels). If [param delta] is positive, makes the polygon grow outward. If [param delta] is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if [param delta] is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.  
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         *      
         *  **Note:** To translate the polygon's vertices specifically, multiply them to a [Transform2D]:  
         *    
         */
        static offset_polygon(polygon: PackedVector2Array | Vector2[], delta: float64, join_type: Geometry2D.PolyJoinType = 0): GArray
        
        /** Inflates or deflates [param polyline] by [param delta] units (pixels), producing polygons. If [param delta] is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If [param delta] is negative, returns an empty array.  
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].  
         *  Each polygon's endpoints will be rounded as determined by [param end_type], see [enum PolyEndType].  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static offset_polyline(polyline: PackedVector2Array | Vector2[], delta: float64, join_type: Geometry2D.PolyJoinType = 0, end_type: Geometry2D.PolyEndType = 3): GArray
        
        /** Given an array of [Vector2]s representing tiles, builds an atlas. The returned dictionary has two keys: `points` is a [PackedVector2Array] that specifies the positions of each tile, `size` contains the overall size of the whole atlas as [Vector2i]. */
        static make_atlas(sizes: PackedVector2Array | Vector2[]): GDictionary
    }
    // _singleton_class_: Geometry3D
    /** Provides methods for some common 3D geometric operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_geometry3d.html  
     */
    class Geometry3D extends Object {
        /** Calculates and returns all the vertex points of a convex shape defined by an array of [param planes]. */
        static compute_convex_mesh_points(planes: GArray): PackedVector3Array
        
        /** Returns an array with 6 [Plane]s that describe the sides of a box centered at the origin. The box size is defined by [param extents], which represents one (positive) corner of the box (i.e. half its actual size). */
        static build_box_planes(extents: Vector3): GArray
        
        /** Returns an array of [Plane]s closely bounding a faceted cylinder centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the round part of the cylinder. The parameter [param axis] describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z). */
        static build_cylinder_planes(radius: float64, height: float64, sides: int64, axis: Vector3.Axis = 2): GArray
        
        /** Returns an array of [Plane]s closely bounding a faceted capsule centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the side part of the capsule, whereas [param lats] gives the number of latitudinal steps at the bottom and top of the capsule. The parameter [param axis] describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z). */
        static build_capsule_planes(radius: float64, height: float64, sides: int64, lats: int64, axis: Vector3.Axis = 2): GArray
        
        /** Given the two 3D segments ([param p1], [param p2]) and ([param q1], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector3Array] that contains this point on ([param p1], [param p2]) as well the accompanying point on ([param q1], [param q2]). */
        static get_closest_points_between_segments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array
        
        /** Returns the 3D point on the 3D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static get_closest_point_to_segment(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        
        /** Returns the 3D point on the 3D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static get_closest_point_to_segment_uncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        
        /** Returns a [Vector3] containing weights based on how close a 3D position ([param point]) is to a triangle's different vertices ([param a], [param b] and [param c]). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.  
         *  [url=https://en.wikipedia.org/wiki/Barycentric_coordinate_system]Here is a more detailed explanation of barycentric coordinates.[/url]  
         */
        static get_triangle_barycentric_coords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
        
        /** Tests if the 3D ray starting at [param from] with the direction of [param dir] intersects the triangle specified by [param a], [param b] and [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns `null`. */
        static ray_intersects_triangle(from: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        
        /** Tests if the segment ([param from], [param to]) intersects the triangle [param a], [param b], [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns `null`. */
        static segment_intersects_triangle(from: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        
        /** Checks if the segment ([param from], [param to]) intersects the sphere that is located at [param sphere_position] and has radius [param sphere_radius]. If no, returns an empty [PackedVector3Array]. If yes, returns a [PackedVector3Array] containing the point of intersection and the sphere's normal at the point of intersection. */
        static segment_intersects_sphere(from: Vector3, to: Vector3, sphere_position: Vector3, sphere_radius: float64): PackedVector3Array
        
        /** Checks if the segment ([param from], [param to]) intersects the cylinder with height [param height] that is centered at the origin and has radius [param radius]. If no, returns an empty [PackedVector3Array]. If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection. */
        static segment_intersects_cylinder(from: Vector3, to: Vector3, height: float64, radius: float64): PackedVector3Array
        
        /** Given a convex hull defined though the [Plane]s in the array [param planes], tests if the segment ([param from], [param to]) intersects with that hull. If an intersection is found, returns a [PackedVector3Array] containing the point the intersection and the hull's normal. Otherwise, returns an empty array. */
        static segment_intersects_convex(from: Vector3, to: Vector3, planes: GArray): PackedVector3Array
        
        /** Clips the polygon defined by the points in [param points] against the [param plane] and returns the points of the clipped polygon. */
        static clip_polygon(points: PackedVector3Array | Vector3[], plane: Plane): PackedVector3Array
        
        /** Tetrahedralizes the volume specified by a discrete set of [param points] in 3D space, ensuring that no point lies within the circumsphere of any resulting tetrahedron. The method returns a [PackedInt32Array] where each tetrahedron consists of four consecutive point indices into the [param points] array (resulting in an array with `n * 4` elements, where `n` is the number of tetrahedra found). If the tetrahedralization is unsuccessful, an empty [PackedInt32Array] is returned. */
        static tetrahedralize_delaunay(points: PackedVector3Array | Vector3[]): PackedInt32Array
    }
    // _singleton_class_: ResourceLoader
    namespace ResourceLoader {
        enum ThreadLoadStatus {
            /** The resource is invalid, or has not been loaded with [method load_threaded_request]. */
            THREAD_LOAD_INVALID_RESOURCE = 0,
            
            /** The resource is still being loaded. */
            THREAD_LOAD_IN_PROGRESS = 1,
            
            /** Some error occurred during loading and it failed. */
            THREAD_LOAD_FAILED = 2,
            
            /** The resource was loaded successfully and can be accessed via [method load_threaded_get]. */
            THREAD_LOAD_LOADED = 3,
        }
        enum CacheMode {
            /** Neither the main resource (the one requested to be loaded) nor any of its subresources are retrieved from cache nor stored into it. Dependencies (external resources) are loaded with [constant CACHE_MODE_REUSE]. */
            CACHE_MODE_IGNORE = 0,
            
            /** The main resource (the one requested to be loaded), its subresources, and its dependencies (external resources) are retrieved from cache if present, instead of loaded. Those not cached are loaded and then stored into the cache. The same rules are propagated recursively down the tree of dependencies (external resources). */
            CACHE_MODE_REUSE = 1,
            
            /** Like [constant CACHE_MODE_REUSE], but the cache is checked for the main resource (the one requested to be loaded) as well as for each of its subresources. Those already in the cache, as long as the loaded and cached types match, have their data refreshed from storage into the already existing instances. Otherwise, they are recreated as completely new objects. */
            CACHE_MODE_REPLACE = 2,
            
            /** Like [constant CACHE_MODE_IGNORE], but propagated recursively down the tree of dependencies (external resources). */
            CACHE_MODE_IGNORE_DEEP = 3,
            
            /** Like [constant CACHE_MODE_REPLACE], but propagated recursively down the tree of dependencies (external resources). */
            CACHE_MODE_REPLACE_DEEP = 4,
        }
    }
    /** A singleton for loading resource files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_resourceloader.html  
     */
    class ResourceLoader extends Object {
        /** Loads the resource using threads. If [param use_sub_threads] is `true`, multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        static load_threaded_request(path: string, type_hint: string = '', use_sub_threads: boolean = false, cache_mode: ResourceLoader.CacheMode = 1): GError
        
        /** Returns the status of a threaded loading operation started with [method load_threaded_request] for the resource at [param path]. See [enum ThreadLoadStatus] for possible return values.  
         *  An array variable can optionally be passed via [param progress], and will return a one-element array containing the percentage of completion of the threaded loading.  
         *      
         *  **Note:** The recommended way of using this method is to call it during different frames (e.g., in [method Node._process], instead of a loop).  
         */
        static load_threaded_get_status(path: string, progress: GArray = []): ResourceLoader.ThreadLoadStatus
        
        /** Returns the resource loaded by [method load_threaded_request].  
         *  If this is called before the loading thread is done (i.e. [method load_threaded_get_status] is not [constant THREAD_LOAD_LOADED]), the calling thread will be blocked until the resource has finished loading. However, it's recommended to use [method load_threaded_get_status] to known when the load has actually completed.  
         */
        static load_threaded_get(path: string): Resource
        
        /** Loads a resource at the given [param path], caching the result for further access.  
         *  The registered [ResourceFormatLoader]s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.  
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         *  Returns an empty resource if no [ResourceFormatLoader] could handle the file, and prints an error if no file is found at the specified path.  
         *  GDScript has a simplified [method @GDScript.load] built-in method which can be used in most situations, leaving the use of [ResourceLoader] for more advanced scenarios.  
         *      
         *  **Note:** If [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`, [method @GDScript.load] will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [member ProjectSettings.editor/export/convert_text_resources_to_binary] to `false`.  
         *      
         *  **Note:** Relative paths will be prefixed with `"res://"` before loading, to avoid unexpected results make sure your paths are absolute.  
         */
        static load(path: string, type_hint: string = '', cache_mode: ResourceLoader.CacheMode = 1): Resource
        
        /** Returns the list of recognized extensions for a resource type. */
        static get_recognized_extensions_for_type(type: string): PackedStringArray
        
        /** Registers a new [ResourceFormatLoader]. The ResourceLoader will use the ResourceFormatLoader as described in [method load].  
         *  This method is performed implicitly for ResourceFormatLoaders written in GDScript (see [ResourceFormatLoader] for more information).  
         */
        static add_resource_format_loader(format_loader: ResourceFormatLoader, at_front: boolean = false): void
        
        /** Unregisters the given [ResourceFormatLoader]. */
        static remove_resource_format_loader(format_loader: ResourceFormatLoader): void
        
        /** Changes the behavior on missing sub-resources. The default behavior is to abort loading. */
        static set_abort_on_missing_resources(abort: boolean): void
        
        /** Returns the dependencies for the resource at the given [param path].  
         *      
         *  **Note:** The dependencies are returned with slices separated by `::`. You can use [method String.get_slice] to get their components.  
         *    
         */
        static get_dependencies(path: string): PackedStringArray
        
        /** Returns whether a cached resource is available for the given [param path].  
         *  Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the [method load] method will use the cached version. The cached resource can be overridden by using [method Resource.take_over_path] on a new resource for that same path.  
         */
        static has_cached(path: string): boolean
        
        /** Returns whether a recognized resource exists for the given [param path].  
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].  
         *      
         *  **Note:** If you use [method Resource.take_over_path], this method will return `true` for the taken path even if the resource wasn't saved (i.e. exists only in resource cache).  
         */
        static exists(path: string, type_hint: string = ''): boolean
        
        /** Returns the ID associated with a given resource path, or `-1` when no such ID exists. */
        static get_resource_uid(path: string): int64
    }
    // _singleton_class_: ResourceSaver
    namespace ResourceSaver {
        enum SaverFlags {
            /** No resource saving option. */
            FLAG_NONE = 0,
            
            /** Save the resource with a path relative to the scene which uses it. */
            FLAG_RELATIVE_PATHS = 1,
            
            /** Bundles external resources. */
            FLAG_BUNDLE_RESOURCES = 2,
            
            /** Changes the [member Resource.resource_path] of the saved resource to match its new location. */
            FLAG_CHANGE_PATH = 4,
            
            /** Do not save editor-specific metadata (identified by their `__editor` prefix). */
            FLAG_OMIT_EDITOR_PROPERTIES = 8,
            
            /** Save as big endian (see [member FileAccess.big_endian]). */
            FLAG_SAVE_BIG_ENDIAN = 16,
            
            /** Compress the resource on save using [constant FileAccess.COMPRESSION_ZSTD]. Only available for binary resource types. */
            FLAG_COMPRESS = 32,
            
            /** Take over the paths of the saved subresources (see [method Resource.take_over_path]). */
            FLAG_REPLACE_SUBRESOURCE_PATHS = 64,
        }
    }
    /** A singleton for saving [Resource]s to the filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_resourcesaver.html  
     */
    class ResourceSaver extends Object {
        /** Saves a resource to disk to the given path, using a [ResourceFormatSaver] that recognizes the resource object. If [param path] is empty, [ResourceSaver] will try to use [member Resource.resource_path].  
         *  The [param flags] bitmask can be specified to customize the save behavior using [enum SaverFlags] flags.  
         *  Returns [constant OK] on success.  
         *      
         *  **Note:** When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.  
         */
        static save(resource: Resource, path: string = '', flags: ResourceSaver.SaverFlags = 0): GError
        
        /** Returns the list of extensions available for saving a resource of a given type. */
        static get_recognized_extensions(type: Resource): PackedStringArray
        
        /** Registers a new [ResourceFormatSaver]. The ResourceSaver will use the ResourceFormatSaver as described in [method save].  
         *  This method is performed implicitly for ResourceFormatSavers written in GDScript (see [ResourceFormatSaver] for more information).  
         */
        static add_resource_format_saver(format_saver: ResourceFormatSaver, at_front: boolean = false): void
        
        /** Unregisters the given [ResourceFormatSaver]. */
        static remove_resource_format_saver(format_saver: ResourceFormatSaver): void
    }
    // _singleton_class_: OS
    namespace OS {
        enum RenderingDriver {
            /** The Vulkan rendering driver. It requires Vulkan 1.0 support and automatically uses features from Vulkan 1.1 and 1.2 if available. */
            RENDERING_DRIVER_VULKAN = 0,
            
            /** The OpenGL 3 rendering driver. It uses OpenGL 3.3 Core Profile on desktop platforms, OpenGL ES 3.0 on mobile devices, and WebGL 2.0 on Web. */
            RENDERING_DRIVER_OPENGL3 = 1,
            
            /** The Direct3D 12 rendering driver. */
            RENDERING_DRIVER_D3D12 = 2,
        }
        enum SystemDir {
            /** Refers to the Desktop directory path. */
            SYSTEM_DIR_DESKTOP = 0,
            
            /** Refers to the DCIM (Digital Camera Images) directory path. */
            SYSTEM_DIR_DCIM = 1,
            
            /** Refers to the Documents directory path. */
            SYSTEM_DIR_DOCUMENTS = 2,
            
            /** Refers to the Downloads directory path. */
            SYSTEM_DIR_DOWNLOADS = 3,
            
            /** Refers to the Movies (or Videos) directory path. */
            SYSTEM_DIR_MOVIES = 4,
            
            /** Refers to the Music directory path. */
            SYSTEM_DIR_MUSIC = 5,
            
            /** Refers to the Pictures directory path. */
            SYSTEM_DIR_PICTURES = 6,
            
            /** Refers to the Ringtones directory path. */
            SYSTEM_DIR_RINGTONES = 7,
        }
    }
    /** Provides access to common operating system functionalities.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_os.html  
     */
    class OS extends Object {
        /** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size].  
         *      
         *  **Note:** Generating large quantities of bytes using this method can result in locking and entropy of lower quality on most platforms. Using [method Crypto.generate_random_bytes] is preferred in most cases.  
         */
        static get_entropy(size: int64): PackedByteArray
        
        /** Returns the list of certification authorities trusted by the operating system as a string of concatenated certificates in PEM format. */
        static get_system_ca_certificates(): string
        
        /** Returns an array of connected MIDI device names, if they exist. Returns an empty array if the system MIDI driver has not previously been initialized with [method open_midi_inputs]. See also [method close_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS and Windows.  
         */
        static get_connected_midi_inputs(): PackedStringArray
        
        /** Initializes the singleton for the system MIDI driver, allowing Godot to receive [InputEventMIDI]. See also [method get_connected_midi_inputs] and [method close_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS and Windows.  
         */
        static open_midi_inputs(): void
        
        /** Shuts down the system MIDI driver. Godot will no longer receive [InputEventMIDI]. See also [method open_midi_inputs] and [method get_connected_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS and Windows.  
         */
        static close_midi_inputs(): void
        
        /** Displays a modal dialog box using the host platform's implementation. The engine execution is blocked until the dialog is closed. */
        static alert(text: string, title: string = 'Alert!'): void
        
        /** Crashes the engine (or the editor if called within a `@tool` script). See also [method kill].  
         *      
         *  **Note:** This method should  *only*  be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [method @GDScript.assert], [method @GlobalScope.push_error], or [method alert].  
         */
        static crash(message: string): void
        
        /** Returns the number of  *logical*  CPU cores available on the host machine. On CPUs with HyperThreading enabled, this number will be greater than the number of  *physical*  CPU cores. */
        static get_processor_count(): int64
        
        /** Returns the full name of the CPU model on the host machine (e.g. `"Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz"`).  
         *      
         *  **Note:** This method is only implemented on Windows, macOS, Linux and iOS. On Android and Web, [method get_processor_name] returns an empty string.  
         */
        static get_processor_name(): string
        
        /** Returns the list of font family names available.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static get_system_fonts(): PackedStringArray
        
        /** Returns the path to the system font file with [param font_name] and style. Returns an empty string if no matching fonts found.  
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".  
         *      
         *  **Note:** Returned font might have different style if the requested style is not available.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static get_system_font_path(font_name: string, weight: int64 = 400, stretch: int64 = 100, italic: boolean = false): string
        
        /** Returns an array of the system substitute font file paths, which are similar to the font with [param font_name] and style for the specified text, locale, and script. Returns an empty array if no matching fonts found.  
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".  
         *      
         *  **Note:** Depending on OS, it's not guaranteed that any of the returned fonts will be suitable for rendering specified text. Fonts should be loaded and checked in the order they are returned, and the first suitable one used.  
         *      
         *  **Note:** Returned fonts might have different style if the requested style is not available or belong to a different font family.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static get_system_font_path_for_text(font_name: string, text: string, locale: string = '', script: string = '', weight: int64 = 400, stretch: int64 = 100, italic: boolean = false): PackedStringArray
        
        /** Returns the file path to the current engine executable.  
         *      
         *  **Note:** On macOS, if you want to launch another instance of Godot, always use [method create_instance] instead of relying on the executable path.  
         */
        static get_executable_path(): string
        
        /** Reads a user input string from the standard input (usually the terminal). This operation is  *blocking* , which causes the window to freeze if [method read_string_from_stdin] is called on the main thread. The thread calling [method read_string_from_stdin] will block until the program receives a line break in standard input (usually by the user pressing [kbd]Enter[/kbd]).  
         *      
         *  **Note:** This method is implemented on Linux, macOS and Windows.  
         *      
         *  **Note:** On exported Windows builds, run the console wrapper executable to access the terminal. Otherwise, the standard input will not work correctly. If you need a single executable with console support, use a custom build compiled with the `windows_subsystem=console` flag.  
         */
        static read_string_from_stdin(): string
        
        /** Executes the given process in a  *blocking*  way. The file specified in [param path] must exist and be executable. The system path resolution will be used. The [param arguments] are used in the given order, separated by spaces, and wrapped in quotes.  
         *  If an [param output] array is provided, the complete shell output of the process is appended to [param output] as a single [String] element. If [param read_stderr] is `true`, the output to the standard error stream is also appended to the array.  
         *  On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window is opened.  
         *  This method returns the exit code of the command, or `-1` if the process fails to execute.  
         *      
         *  **Note:** The main thread will be blocked until the executed command terminates. Use [Thread] to create a separate thread that will not block the main thread, or use [method create_process] to create a completely independent process.  
         *  For example, to retrieve a list of the working directory's contents:  
         *    
         *  If you wish to access a shell built-in or execute a composite command, a platform-specific shell can be invoked. For example:  
         *    
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in [param path], `/c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in [param path], `-Command` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a Unix shell built-in command, specify shell executable name in [param path], `-c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export.  
         *      
         *  **Note:** On Android, system commands such as `dumpsys` can only be run on a rooted device.  
         */
        static execute(path: string, arguments_: PackedStringArray | string[], output: GArray = [], read_stderr: boolean = false, open_console: boolean = false): int64
        
        /** Creates a new process that runs independently of Godot with redirected IO. It will not terminate when Godot terminates. The path specified in [param path] must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The [param arguments] are used in the given order and separated by a space.  
         *  If the process cannot be created, this method returns an empty [Dictionary]. Otherwise, this method returns a [Dictionary] with the following keys:  
         *  - `"stdio"` - [FileAccess] to access the process stdin and stdout pipes (read/write).  
         *  - `"stderr"` - [FileAccess] to access the process stderr pipe (read only).  
         *  - `"pid"` - Process ID as an [int], which you can use to monitor the process (and potentially terminate it with [method kill]).  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in [param path], `/c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in [param path], `-Command` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a Unix shell built-in command, specify shell executable name in [param path], `-c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.  
         */
        static execute_with_pipe(path: string, arguments_: PackedStringArray | string[]): GDictionary
        
        /** Creates a new process that runs independently of Godot. It will not terminate when Godot terminates. The path specified in [param path] must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The [param arguments] are used in the given order and separated by a space.  
         *  On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window will be opened.  
         *  If the process is successfully created, this method returns its process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). Otherwise, this method returns `-1`.  
         *  For example, running another instance of the project:  
         *    
         *  See [method execute] if you wish to run an external command and retrieve the results.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.  
         */
        static create_process(path: string, arguments_: PackedStringArray | string[], open_console: boolean = false): int64
        
        /** Creates a new instance of Godot that runs independently. The [param arguments] are used in the given order and separated by a space.  
         *  If the process is successfully created, this method returns the new process' ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process cannot be created, this method returns `-1`.  
         *  See [method create_process] if you wish to run a different process.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         */
        static create_instance(arguments_: PackedStringArray | string[]): int64
        
        /** Kill (terminate) the process identified by the given process ID ([param pid]), such as the ID returned by [method execute] in non-blocking mode. See also [method crash].  
         *      
         *  **Note:** This method can also be used to kill processes that were not spawned by the engine.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static kill(pid: int64): GError
        
        /** Requests the OS to open a resource identified by [param uri] with the most appropriate program. For example:  
         *  - `OS.shell_open("C:\\Users\name\Downloads")` on Windows opens the file explorer at the user's Downloads folder.  
         *  - `OS.shell_open("https://godotengine.org")` opens the default web browser on the official Godot website.  
         *  - `OS.shell_open("mailto:example@example.com")` opens the default email client with the "To" field set to `example@example.com`. See [url=https://datatracker.ietf.org/doc/html/rfc2368]RFC 2368 - The `mailto` URL scheme[/url] for a list of fields that can be added.  
         *  Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` project path into a system path for use with this method.  
         *      
         *  **Note:** Use [method String.uri_encode] to encode characters within URLs in a URL-safe, portable way. This is especially required for line breaks. Otherwise, [method shell_open] may not work correctly in a project exported to the Web platform.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux, macOS and Windows.  
         */
        static shell_open(uri: string): GError
        
        /** Requests the OS to open the file manager, navigate to the given [param file_or_dir_path] and select the target file or folder.  
         *  If [param open_folder] is `true` and [param file_or_dir_path] is a valid directory path, the OS will open the file manager and navigate to the target folder without selecting anything.  
         *  Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` project path into a system path to use with this method.  
         *      
         *  **Note:** This method is currently only implemented on Windows and macOS. On other platforms, it will fallback to [method shell_open] with a directory path of [param file_or_dir_path] prefixed with `file://`.  
         */
        static shell_show_in_file_manager(file_or_dir_path: string, open_folder: boolean = true): GError
        
        /** Returns `true` if the child process ID ([param pid]) is still running or `false` if it has terminated. [param pid] must be a valid ID generated from [method create_process].  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS, and Windows.  
         */
        static is_process_running(pid: int64): boolean
        
        /** Returns the exit code of a spawned process once it has finished running (see [method is_process_running]).  
         *  Returns `-1` if the [param pid] is not a PID of a spawned child process, the process is still running, or the method is not implemented for the current platform.  
         *      
         *  **Note:** Returns `-1` if the [param pid] is a macOS bundled app process.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         */
        static get_process_exit_code(pid: int64): int64
        
        /** Returns the number used by the host machine to uniquely identify this application.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS, and Windows.  
         */
        static get_process_id(): int64
        
        /** Returns `true` if the environment variable with the name [param variable] exists.  
         *      
         *  **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.  
         */
        static has_environment(variable: string): boolean
        
        /** Returns the value of the given environment variable, or an empty string if [param variable] doesn't exist.  
         *      
         *  **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.  
         *      
         *  **Note:** On macOS, applications do not have access to shell environment variables.  
         */
        static get_environment(variable: string): string
        
        /** Sets the value of the environment variable [param variable] to [param value]. The environment variable will be set for the Godot process and any process executed with [method execute] after running [method set_environment]. The environment variable will  *not*  persist to processes run after the Godot process was terminated.  
         *      
         *  **Note:** Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the `=` character. On Windows, there is a 32767 characters limit for the combined length of [param variable], [param value], and the `=` and null terminator characters that will be registered in the environment block.  
         */
        static set_environment(variable: string, value: string): void
        
        /** Removes the given environment variable from the current environment, if it exists. The [param variable] name cannot be empty or include the `=` character. The environment variable will be removed for the Godot process and any process executed with [method execute] after running [method unset_environment]. The removal of the environment variable will  *not*  persist to processes run after the Godot process was terminated.  
         *      
         *  **Note:** Environment variable names are case-sensitive on all platforms except Windows.  
         */
        static unset_environment(variable: string): void
        
        /** Returns the name of the host platform.  
         *  - On Windows, this is `"Windows"`.  
         *  - On macOS, this is `"macOS"`.  
         *  - On Linux-based operating systems, this is `"Linux"`.  
         *  - On BSD-based operating systems, this is `"FreeBSD"`, `"NetBSD"`, `"OpenBSD"`, or `"BSD"` as a fallback.  
         *  - On Android, this is `"Android"`.  
         *  - On iOS, this is `"iOS"`.  
         *  - On Web, this is `"Web"`.  
         *      
         *  **Note:** Custom builds of the engine may support additional platforms, such as consoles, possibly returning other names.  
         *    
         *      
         *  **Note:** On Web platforms, it is still possible to determine the host platform's OS with feature tags. See [method has_feature].  
         */
        static get_name(): string
        
        /** Returns the name of the distribution for Linux and BSD platforms (e.g. "Ubuntu", "Manjaro", "OpenBSD", etc.).  
         *  Returns the same value as [method get_name] for stock Android ROMs, but attempts to return the custom ROM name for popular Android derivatives such as "LineageOS".  
         *  Returns the same value as [method get_name] for other platforms.  
         *      
         *  **Note:** This method is not supported on the Web platform. It returns an empty string.  
         */
        static get_distribution_name(): string
        
        /** Returns the exact production and build version of the operating system. This is different from the branded version used in marketing. This helps to distinguish between different releases of operating systems, including minor versions, and insider and custom builds.  
         *  - For Windows, the major and minor version are returned, as well as the build number. For example, the returned string may look like `10.0.9926` for a build of Windows 10, and it may look like `6.1.7601` for a build of Windows 7 SP1.  
         *  - For rolling distributions, such as Arch Linux, an empty string is returned.  
         *  - For macOS and iOS, the major and minor version are returned, as well as the patch number.  
         *  - For Android, the SDK version and the incremental build number are returned. If it's a custom ROM, it attempts to return its version instead.  
         *      
         *  **Note:** This method is not supported on the Web platform. It returns an empty string.  
         */
        static get_version(): string
        
        /** Returns the command-line arguments passed to the engine.  
         *  Command-line arguments can be written in any form, including both `--key value` and `--key=value` forms so they can be properly parsed, as long as custom command-line arguments do not conflict with engine arguments.  
         *  You can also incorporate environment variables using the [method get_environment] method.  
         *  You can set [member ProjectSettings.editor/run/main_run_args] to define command-line arguments to be passed by the editor when running the project.  
         *  Here's a minimal example on how to parse command-line arguments into a [Dictionary] using the `--key=value` form for arguments:  
         *    
         *      
         *  **Note:** Passing custom user arguments directly is not recommended, as the engine may discard or modify them. Instead, pass the standard UNIX double dash (`--`) and then the custom arguments, which the engine will ignore by design. These can be read via [method get_cmdline_user_args].  
         */
        static get_cmdline_args(): PackedStringArray
        
        /** Returns the command-line user arguments passed to the engine. User arguments are ignored by the engine and reserved for the user. They are passed after the double dash `--` argument. `++` may be used when `--` is intercepted by another program (such as `startx`).  
         *    
         *  To get all passed arguments, use [method get_cmdline_args].  
         */
        static get_cmdline_user_args(): PackedStringArray
        
        /** Returns the video adapter driver name and version for the user's currently active graphics card, as a [PackedStringArray]. See also [method RenderingServer.get_video_adapter_api_version].  
         *  The first element holds the driver name, such as `nvidia`, `amdgpu`, etc.  
         *  The second element holds the driver version. For example, on the `nvidia` driver on a Linux/BSD platform, the version is in the format `510.85.02`. For Windows, the driver's format is `31.0.15.1659`.  
         *      
         *  **Note:** This method is only supported on Linux/BSD and Windows when not running in headless mode. On other platforms, it returns an empty array.  
         */
        static get_video_adapter_driver_info(): PackedStringArray
        
        /** If [param restart] is `true`, restarts the project automatically when it is exited with [method SceneTree.quit] or [constant Node.NOTIFICATION_WM_CLOSE_REQUEST]. Command-line [param arguments] can be supplied. To restart the project with the same command line arguments as originally used to run the project, pass [method get_cmdline_args] as the value for [param arguments].  
         *  This method can be used to apply setting changes that require a restart. See also [method is_restart_on_exit_set] and [method get_restart_on_exit_arguments].  
         *      
         *  **Note:** This method is only effective on desktop platforms, and only when the project isn't started from the editor. It will have no effect on mobile and Web platforms, or when the project is started from the editor.  
         *      
         *  **Note:** If the project process crashes or is  *killed*  by the user (by sending `SIGKILL` instead of the usual `SIGTERM`), the project won't restart automatically.  
         */
        static set_restart_on_exit(restart: boolean, arguments_: PackedStringArray | string[] = []): void
        
        /** Returns `true` if the project will automatically restart when it exits for any reason, `false` otherwise. See also [method set_restart_on_exit] and [method get_restart_on_exit_arguments]. */
        static is_restart_on_exit_set(): boolean
        
        /** Returns the list of command line arguments that will be used when the project automatically restarts using [method set_restart_on_exit]. See also [method is_restart_on_exit_set]. */
        static get_restart_on_exit_arguments(): PackedStringArray
        
        /** Delays execution of the current thread by [param usec] microseconds. [param usec] must be greater than or equal to `0`. Otherwise, [method delay_usec] does nothing and prints an error message.  
         *      
         *  **Note:** [method delay_usec] is a  *blocking*  way to delay code execution. To delay code execution in a non-blocking way, you may use [method SceneTree.create_timer]. Awaiting with a [SceneTreeTimer] delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).  
         *      
         *  **Note:** When [method delay_usec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_usec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).  
         */
        static delay_usec(usec: int64): void
        
        /** Delays execution of the current thread by [param msec] milliseconds. [param msec] must be greater than or equal to `0`. Otherwise, [method delay_msec] does nothing and prints an error message.  
         *      
         *  **Note:** [method delay_msec] is a  *blocking*  way to delay code execution. To delay code execution in a non-blocking way, you may use [method SceneTree.create_timer]. Awaiting with [SceneTreeTimer] delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).  
         *      
         *  **Note:** When [method delay_msec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_msec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).  
         */
        static delay_msec(msec: int64): void
        
        /** Returns the host OS locale as a [String] of the form `language_Script_COUNTRY_VARIANT@extra`. Every substring after `language` is optional and may not exist.  
         *  - `language` - 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url], in lower case.  
         *  - [code skip-lint]Script` - 4-letter [url=https://en.wikipedia.org/wiki/ISO_15924]script code[/url], in title case.  
         *  - `COUNTRY` - 2 or 3-letter [url=https://en.wikipedia.org/wiki/ISO_3166-1]country code[/url], in upper case.  
         *  - `VARIANT` - language variant, region and sort order. The variant can have any number of underscored keywords.  
         *  - `extra` - semicolon separated list of additional key words. This may include currency, calendar, sort order and numbering system information.  
         *  If you want only the language code and not the fully specified locale from the OS, you can use [method get_locale_language].  
         */
        static get_locale(): string
        
        /** Returns the host OS locale's 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url] as a string which should be consistent on all platforms. This is equivalent to extracting the `language` part of the [method get_locale] string.  
         *  This can be used to narrow down fully specified locale strings to only the "common" language code, when you don't need the additional information about country code or variants. For example, for a French Canadian user with `fr_CA` locale, this would return `fr`.  
         */
        static get_locale_language(): string
        
        /** Returns the model name of the current device.  
         *      
         *  **Note:** This method is implemented on Android and iOS. Returns `"GenericDevice"` on unsupported platforms.  
         */
        static get_model_name(): string
        
        /** Returns `true` if the `user://` file system is persistent, that is, its state is the same after a player quits and starts the game again. Relevant to the Web platform, where this persistence may be unavailable. */
        static is_userfs_persistent(): boolean
        
        /** Returns `true` if the engine was executed with the `--verbose` or `-v` command line argument, or if [member ProjectSettings.debug/settings/stdout/verbose_stdout] is `true`. See also [method @GlobalScope.print_verbose]. */
        static is_stdout_verbose(): boolean
        
        /** Returns `true` if the Godot binary used to run the project is a  *debug*  export template, or when running in the editor.  
         *  Returns `false` if the Godot binary used to run the project is a  *release*  export template.  
         *      
         *  **Note:** To check whether the Godot binary used to run the project is an export template (debug or release), use `OS.has_feature("template")` instead.  
         */
        static is_debug_build(): boolean
        
        /** Returns the amount of static memory being used by the program in bytes. Only works in debug builds. */
        static get_static_memory_usage(): int64
        
        /** Returns the maximum amount of static memory used. Only works in debug builds. */
        static get_static_memory_peak_usage(): int64
        
        /** Returns a [Dictionary] containing information about the current memory with the following entries:  
         *  - `"physical"` - total amount of usable physical memory in bytes. This value can be slightly less than the actual physical memory amount, since it does not include memory reserved by the kernel and devices.  
         *  - `"free"` - amount of physical memory, that can be immediately allocated without disk access or other costly operations, in bytes. The process might be able to allocate more physical memory, but this action will require moving inactive pages to disk, which can be expensive.  
         *  - `"available"` - amount of memory that can be allocated without extending the swap file(s), in bytes. This value includes both physical memory and swap.  
         *  - `"stack"` - size of the current thread stack in bytes.  
         *      
         *  **Note:** Each entry's value may be `-1` if it is unknown.  
         */
        static get_memory_info(): GDictionary
        
        /** Moves the file or directory at the given [param path] to the system's recycle bin. See also [method DirAccess.remove].  
         *  The method takes only global paths, so you may need to use [method ProjectSettings.globalize_path]. Do not use it for files in `res://` as it will not work in exported projects.  
         *  Returns [constant FAILED] if the file or directory cannot be found, or the system does not support this method.  
         *    
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         *      
         *  **Note:** If the user has disabled the recycle bin on their system, the file will be permanently deleted instead.  
         */
        static move_to_trash(path: string): GError
        
        /** Returns the absolute directory path where user data is written (the `user://` directory in Godot). The path depends on the project name and [member ProjectSettings.application/config/use_custom_user_dir].  
         *  - On Windows, this is `%AppData%\Godot\app_userdata\[project_name]`, or `%AppData%\[custom_name]` if `use_custom_user_dir` is set. `%AppData%` expands to `%UserProfile%\AppData\Roaming`.  
         *  - On macOS, this is `~/Library/Application Support/Godot/app_userdata/[project_name]`, or `~/Library/Application Support/[custom_name]` if `use_custom_user_dir` is set.  
         *  - On Linux and BSD, this is `~/.local/share/godot/app_userdata/[project_name]`, or `~/.local/share/[custom_name]` if `use_custom_user_dir` is set.  
         *  - On Android and iOS, this is a sandboxed directory in either internal or external storage, depending on the user's configuration.  
         *  - On Web, this is a virtual directory managed by the browser.  
         *  If the project name is empty, `[project_name]` falls back to `[unnamed project]`.  
         *  Not to be confused with [method get_data_dir], which returns the  *global*  (non-project-specific) user home directory.  
         */
        static get_user_data_dir(): string
        
        /** Returns the path to commonly used folders across different platforms, as defined by [param dir]. See the [enum SystemDir] constants for available locations.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         *      
         *  **Note:** Shared storage is implemented on Android and allows to differentiate between app specific and shared directories, if [param shared_storage] is `true`. Shared directories have additional restrictions on Android.  
         */
        static get_system_dir(dir: OS.SystemDir, shared_storage: boolean = true): string
        
        /** Returns the  *global*  user configuration directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_CONFIG_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/4.3/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_data_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static get_config_dir(): string
        
        /** Returns the  *global*  user data directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_DATA_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/4.3/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_config_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static get_data_dir(): string
        
        /** Returns the  *global*  cache data directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_CACHE_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/4.3/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_config_dir] and [method get_data_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static get_cache_dir(): string
        
        /** Returns a string that is unique to the device.  
         *      
         *  **Note:** This string may change without notice if the user reinstalls their operating system, upgrades it, or modifies their hardware. This means it should generally not be used to encrypt persistent data, as the data saved before an unexpected ID change would become inaccessible. The returned string may also be falsified using external programs, so do not rely on the string returned by this method for security purposes.  
         *      
         *  **Note:** On Web, returns an empty string and generates an error, as this method cannot be implemented for security reasons.  
         */
        static get_unique_id(): string
        
        /** Returns the given keycode as a [String].  
         *    
         *  See also [method find_keycode_from_string], [member InputEventKey.keycode], and [method InputEventKey.get_keycode_with_modifiers].  
         */
        static get_keycode_string(code: Key): string
        
        /** Returns `true` if the input keycode corresponds to a Unicode character. For a list of codes, see the [enum Key] constants.  
         *    
         */
        static is_keycode_unicode(code: int64): boolean
        
        /** Finds the keycode for the given string. The returned values are equivalent to the [enum Key] constants.  
         *    
         *  See also [method get_keycode_string].  
         */
        static find_keycode_from_string(string_: string): Key
        
        /** If [param enabled] is `true`, when opening a file for writing, a temporary file is used in its place. When closed, it is automatically applied to the target file.  
         *  This can useful when files may be opened by other applications, such as antiviruses, text editors, or even the Godot editor itself.  
         */
        static set_use_file_access_save_and_swap(enabled: boolean): void
        
        /** Assigns the given name to the current thread. Returns [constant ERR_UNAVAILABLE] if unavailable on the current platform. */
        static set_thread_name(name: string): GError
        
        /** Returns the ID of the current thread. This can be used in logs to ease debugging of multi-threaded applications.  
         *      
         *  **Note:** Thread IDs are not deterministic and may be reused across application restarts.  
         */
        static get_thread_caller_id(): int64
        
        /** Returns the ID of the main thread. See [method get_thread_caller_id].  
         *      
         *  **Note:** Thread IDs are not deterministic and may be reused across application restarts.  
         */
        static get_main_thread_id(): int64
        
        /** Returns `true` if the feature for the given feature tag is supported in the currently running instance, depending on the platform, build, etc. Can be used to check whether you're currently running a debug build, on a certain platform or arch, etc. Refer to the [url=https://docs.godotengine.org/en/4.3/tutorials/export/feature_tags.html]Feature Tags[/url] documentation for more details.  
         *      
         *  **Note:** Tag names are case-sensitive.  
         *      
         *  **Note:** On the Web platform, one of the following additional tags is defined to indicate the host platform: `web_android`, `web_ios`, `web_linuxbsd`, `web_macos`, or `web_windows`.  
         */
        static has_feature(tag_name: string): boolean
        
        /** Returns `true` if the application is running in the sandbox.  
         *      
         *  **Note:** This method is only implemented on macOS and Linux.  
         */
        static is_sandboxed(): boolean
        
        /** Requests permission from the OS for the given [param name]. Returns `true` if the permission has been successfully granted.  
         *      
         *  **Note:** This method is currently only implemented on Android, to specifically request permission for `"RECORD_AUDIO"` by `AudioDriverOpenSL`.  
         */
        static request_permission(name: string): boolean
        
        /** Requests  *dangerous*  permissions from the OS. Returns `true` if permissions have been successfully granted.  
         *      
         *  **Note:** This method is only implemented on Android. Normal permissions are automatically granted at install time in Android applications.  
         */
        static request_permissions(): boolean
        
        /** On Android devices: Returns the list of dangerous permissions that have been granted.  
         *  On macOS: Returns the list of user selected folders accessible to the application (sandboxed applications only). Use the native file dialog to request folder access permission.  
         */
        static get_granted_permissions(): PackedStringArray
        
        /** On macOS (sandboxed applications only), this function clears list of user selected folders accessible to the application. */
        static revoke_granted_permissions(): void
        
        /** If `true`, the engine optimizes for low processor usage by only refreshing the screen if needed. Can improve battery consumption on mobile.  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/low_processor_mode].  
         */
        get low_processor_usage_mode(): boolean
        set low_processor_usage_mode(value: boolean)
        
        /** The amount of sleeping between frames when the low-processor usage mode is enabled, in microseconds. Higher values will result in lower CPU usage. See also [member low_processor_usage_mode].  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/low_processor_mode_sleep_usec].  
         */
        get low_processor_usage_mode_sleep_usec(): int64
        set low_processor_usage_mode_sleep_usec(value: int64)
        
        /** If `true`, the engine filters the time delta measured between each frame, and attempts to compensate for random variation. This only works on systems where V-Sync is active.  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/delta_smoothing].  
         */
        get delta_smoothing(): boolean
        set delta_smoothing(value: boolean)
    }
    // _singleton_class_: Engine
    /** Provides access to engine properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_engine.html  
     */
    class Engine extends Object {
        /** Returns the fraction through the current physics tick we are at the time of rendering the frame. This can be used to implement fixed timestep interpolation. */
        static get_physics_interpolation_fraction(): float64
        
        /** Returns the total number of frames drawn since the engine started.  
         *      
         *  **Note:** On headless platforms, or if rendering is disabled with `--disable-render-loop` via command line, this method always returns `0`. See also [method get_process_frames].  
         */
        static get_frames_drawn(): int64
        
        /** Returns the average frames rendered every second (FPS), also known as the framerate. */
        static get_frames_per_second(): float64
        
        /** Returns the total number of frames passed since the engine started. This number is increased every **physics frame**. See also [method get_process_frames].  
         *  This method can be used to run expensive logic less often without relying on a [Timer]:  
         *    
         */
        static get_physics_frames(): int64
        
        /** Returns the total number of frames passed since the engine started. This number is increased every **process frame**, regardless of whether the render loop is enabled. See also [method get_frames_drawn] and [method get_physics_frames].  
         *  This method can be used to run expensive logic less often without relying on a [Timer]:  
         *    
         */
        static get_process_frames(): int64
        
        /** Returns the instance of the [MainLoop]. This is usually the main [SceneTree] and is the same as [method Node.get_tree].  
         *      
         *  **Note:** The type instantiated as the main loop can changed with [member ProjectSettings.application/run/main_loop_type].  
         */
        static get_main_loop(): MainLoop
        
        /** Returns the current engine version information as a [Dictionary] containing the following entries:  
         *  - `major` - Major version number as an int;  
         *  - `minor` - Minor version number as an int;  
         *  - `patch` - Patch version number as an int;  
         *  - `hex` - Full version encoded as a hexadecimal int with one byte (2 hex digits) per number (see example below);  
         *  - `status` - Status (such as "beta", "rc1", "rc2", "stable", etc.) as a String;  
         *  - `build` - Build name (e.g. "custom_build") as a String;  
         *  - `hash` - Full Git commit hash as a String;  
         *  - `timestamp` - Holds the Git commit date UNIX timestamp in seconds as an int, or `0` if unavailable;  
         *  - `string` - `major`, `minor`, `patch`, `status`, and `build` in a single String.  
         *  The `hex` value is encoded as follows, from left to right: one byte for the major, one byte for the minor, one byte for the patch version. For example, "3.1.12" would be `0x03010C`.  
         *      
         *  **Note:** The `hex` value is still an [int] internally, and printing it will give you its decimal representation, which is not particularly meaningful. Use hexadecimal literals for quick version comparisons from code:  
         *    
         */
        static get_version_info(): GDictionary
        
        /** Returns the engine author information as a [Dictionary], where each entry is an [Array] of strings with the names of notable contributors to the Godot Engine: `lead_developers`, `founders`, `project_managers`, and `developers`. */
        static get_author_info(): GDictionary
        
        /** Returns an [Array] of dictionaries with copyright information for every component of Godot's source code.  
         *  Every [Dictionary] contains a `name` identifier, and a `parts` array of dictionaries. It describes the component in detail with the following entries:  
         *  - `files` - [Array] of file paths from the source code affected by this component;  
         *  - `copyright` - [Array] of owners of this component;  
         *  - `license` - The license applied to this component (such as "[url=https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants]Expat[/url]" or "[url=https://creativecommons.org/licenses/by/4.0/]CC-BY-4.0[/url]").  
         */
        static get_copyright_info(): GArray
        
        /** Returns a [Dictionary] of categorized donor names. Each entry is an [Array] of strings:  
         *  {`platinum_sponsors`, `gold_sponsors`, `silver_sponsors`, `bronze_sponsors`, `mini_sponsors`, `gold_donors`, `silver_donors`, `bronze_donors`}  
         */
        static get_donor_info(): GDictionary
        
        /** Returns a [Dictionary] of licenses used by Godot and included third party components. Each entry is a license name (such as "[url=https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants]Expat[/url]") and its associated text. */
        static get_license_info(): GDictionary
        
        /** Returns the full Godot license text. */
        static get_license_text(): string
        
        /** Returns the name of the CPU architecture the Godot binary was built for. Possible return values include `"x86_64"`, `"x86_32"`, `"arm64"`, `"arm32"`, `"rv64"`, `"riscv"`, `"ppc64"`, `"ppc"`, `"wasm64"`, and `"wasm32"`.  
         *  To detect whether the current build is 64-bit, you can use the fact that all 64-bit architecture names contain `64` in their name:  
         *    
         *      
         *  **Note:** This method does  *not*  return the name of the system's CPU architecture (like [method OS.get_processor_name]). For example, when running an `x86_32` Godot binary on an `x86_64` system, the returned value will still be `"x86_32"`.  
         */
        static get_architecture_name(): string
        
        /** Returns `true` if the engine is inside the fixed physics process step of the main loop.  
         *    
         */
        static is_in_physics_frame(): boolean
        
        /** Returns `true` if a singleton with the given [param name] exists in the global scope. See also [method get_singleton].  
         *    
         *      
         *  **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.  
         */
        static has_singleton(name: StringName): boolean
        
        /** Returns the global singleton with the given [param name], or `null` if it does not exist. Often used for plugins. See also [method has_singleton] and [method get_singleton_list].  
         *      
         *  **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.  
         */
        static get_singleton(name: StringName): Object
        
        /** Registers the given [Object] [param instance] as a singleton, available globally under [param name]. Useful for plugins. */
        static register_singleton(name: StringName, instance: Object): void
        
        /** Removes the singleton registered under [param name]. The singleton object is  *not*  freed. Only works with user-defined singletons registered with [method register_singleton]. */
        static unregister_singleton(name: StringName): void
        
        /** Returns a list of names of all available global singletons. See also [method get_singleton]. */
        static get_singleton_list(): PackedStringArray
        
        /** Registers a [ScriptLanguage] instance to be available with `ScriptServer`.  
         *  Returns:  
         *  - [constant OK] on success;  
         *  - [constant ERR_UNAVAILABLE] if `ScriptServer` has reached the limit and cannot register any new language;  
         *  - [constant ERR_ALREADY_EXISTS] if `ScriptServer` already contains a language with similar extension/name/type.  
         */
        static register_script_language(language: ScriptLanguage): GError
        
        /** Unregisters the [ScriptLanguage] instance from `ScriptServer`.  
         *  Returns:  
         *  - [constant OK] on success;  
         *  - [constant ERR_DOES_NOT_EXIST] if the language is not registered in `ScriptServer`.  
         */
        static unregister_script_language(language: ScriptLanguage): GError
        
        /** Returns the number of available script languages. Use with [method get_script_language]. */
        static get_script_language_count(): int64
        
        /** Returns an instance of a [ScriptLanguage] with the given [param index]. */
        static get_script_language(index: int64): ScriptLanguage
        
        /** Returns `true` if the script is currently running inside the editor, otherwise returns `false`. This is useful for `@tool` scripts to conditionally draw editor helpers, or prevent accidentally running "game" code that would affect the scene state while in the editor:  
         *    
         *  See [url=https://docs.godotengine.org/en/4.3/tutorials/plugins/running_code_in_the_editor.html]Running code in the editor[/url] in the documentation for more information.  
         *      
         *  **Note:** To detect whether the script is running on an editor  *build*  (such as when pressing [kbd]F5[/kbd]), use [method OS.has_feature] with the `"editor"` argument instead. `OS.has_feature("editor")` evaluate to `true` both when the script is running in the editor and when running the project from the editor, but returns `false` when run from an exported project.  
         */
        static is_editor_hint(): boolean
        
        /** Returns the path to the [MovieWriter]'s output file, or an empty string if the engine wasn't started in Movie Maker mode. The default path can be changed in [member ProjectSettings.editor/movie_writer/movie_file]. */
        static get_write_movie_path(): string
        
        /** If `false`, stops printing error and warning messages to the console and editor Output log. This can be used to hide error and warning messages during unit test suite runs. This property is equivalent to the [member ProjectSettings.application/run/disable_stderr] project setting.  
         *      
         *  **Note:** This property does not impact the editor's Errors tab when running a project from the editor.  
         *  **Warning:** If set to `false` anywhere in the project, important error messages may be hidden even if they are emitted from other scripts. In a `@tool` script, this will also impact the editor itself. Do  *not*  report bugs before ensuring error messages are enabled (as they are by default).  
         */
        get print_error_messages(): boolean
        set print_error_messages(value: boolean)
        
        /** The number of fixed iterations per second. This controls how often physics simulation and [method Node._physics_process] methods are run. This value should generally always be set to `60` or above, as Godot doesn't interpolate the physics step. As a result, values lower than `60` will look stuttery. This value can be increased to make input more reactive or work around collision tunneling issues, but keep in mind doing so will increase CPU usage. See also [member max_fps] and [member ProjectSettings.physics/common/physics_ticks_per_second].  
         *      
         *  **Note:** Only [member max_physics_steps_per_frame] physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [member max_physics_steps_per_frame] if increasing [member physics_ticks_per_second] significantly above its default value.  
         */
        get physics_ticks_per_second(): int64
        set physics_ticks_per_second(value: int64)
        
        /** The maximum number of physics steps that can be simulated each rendered frame.  
         *      
         *  **Note:** The default value is tuned to prevent expensive physics simulations from triggering even more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of [member physics_ticks_per_second]. This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase [member max_physics_steps_per_frame] if you have increased [member physics_ticks_per_second] significantly above its default value.  
         */
        get max_physics_steps_per_frame(): int64
        set max_physics_steps_per_frame(value: int64)
        
        /** The maximum number of frames that can be rendered every second (FPS). A value of `0` means the framerate is uncapped.  
         *  Limiting the FPS can be useful to reduce the host machine's power consumption, which reduces heat, noise emissions, and improves battery life.  
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is **Enabled** or **Adaptive**, the setting takes precedence and the max FPS number cannot exceed the monitor's refresh rate.  
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is **Enabled**, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using an FPS limit a few frames lower than the monitor's refresh rate will [url=https://blurbusters.com/howto-low-lag-vsync-on/]reduce input lag while avoiding tearing[/url].  
         *  See also [member physics_ticks_per_second] and [member ProjectSettings.application/run/max_fps].  
         *      
         *  **Note:** The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project's logic and rendering.  
         *      
         *  **Note:** If [member ProjectSettings.display/window/vsync/vsync_mode] is **Disabled**, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.  
         */
        get max_fps(): int64
        set max_fps(value: int64)
        
        /** The speed multiplier at which the in-game clock updates, compared to real time. For example, if set to `2.0` the game runs twice as fast, and if set to `0.5` the game runs half as fast.  
         *  This value affects [Timer], [SceneTreeTimer], and all other simulations that make use of `delta` time (such as [method Node._process] and [method Node._physics_process]).  
         *      
         *  **Note:** It's recommended to keep this property above `0.0`, as the game may behave unexpectedly otherwise.  
         *      
         *  **Note:** This does not affect audio playback speed. Use [member AudioServer.playback_speed_scale] to adjust audio playback speed independently of [member Engine.time_scale].  
         *      
         *  **Note:** This does not automatically adjust [member physics_ticks_per_second]. With values above `1.0` physics simulation may become less precise, as each physics tick will stretch over a larger period of engine time. If you're modifying [member Engine.time_scale] to speed up simulation by a large factor, consider also increasing [member physics_ticks_per_second] to make the simulation more reliable.  
         */
        get time_scale(): float64
        set time_scale(value: float64)
        
        /** How much physics ticks are synchronized with real time. If `0` or less, the ticks are fully synchronized. Higher values cause the in-game clock to deviate more from the real clock, but they smooth out framerate jitters.  
         *      
         *  **Note:** The default value of `0.5` should be good enough for most cases; values above `2` could cause the game to react to dropped frames with a noticeable delay and are not recommended.  
         *      
         *  **Note:** When using a custom physics interpolation solution, or within a network game, it's recommended to disable the physics jitter fix by setting this property to `0`.  
         */
        get physics_jitter_fix(): float64
        set physics_jitter_fix(value: float64)
    }
    // _singleton_class_: ClassDB
    /** A class information repository.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_classdb.html  
     */
    class ClassDB extends Object {
        /** Returns the names of all the classes available. */
        static get_class_list(): PackedStringArray
        
        /** Returns the names of all the classes that directly or indirectly inherit from [param class]. */
        static get_inheriters_from_class(class_: StringName): PackedStringArray
        
        /** Returns the parent class of [param class]. */
        static get_parent_class(class_: StringName): StringName
        
        /** Returns whether the specified [param class] is available or not. */
        static class_exists(class_: StringName): boolean
        
        /** Returns whether [param inherits] is an ancestor of [param class] or not. */
        static is_parent_class(class_: StringName, inherits: StringName): boolean
        
        /** Returns `true` if objects can be instantiated from the specified [param class], otherwise returns `false`. */
        static can_instantiate(class_: StringName): boolean
        
        /** Creates an instance of [param class]. */
        static instantiate(class_: StringName): any
        
        /** Returns whether [param class] or its ancestry has a signal called [param signal] or not. */
        static class_has_signal(class_: StringName, signal: StringName): boolean
        
        /** Returns the [param signal] data of [param class] or its ancestry. The returned value is a [Dictionary] with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`. */
        static class_get_signal(class_: StringName, signal: StringName): GDictionary
        
        /** Returns an array with all the signals of [param class] or its ancestry if [param no_inheritance] is `false`. Every element of the array is a [Dictionary] as described in [method class_get_signal]. */
        static class_get_signal_list(class_: StringName, no_inheritance: boolean = false): GArray
        
        /** Returns an array with all the properties of [param class] or its ancestry if [param no_inheritance] is `false`. */
        static class_get_property_list(class_: StringName, no_inheritance: boolean = false): GArray
        
        /** Returns the value of [param property] of [param object] or its ancestry. */
        static class_get_property(object: Object, property: StringName): any
        
        /** Sets [param property] value of [param object] to [param value]. */
        static class_set_property(object: Object, property: StringName, value: any): GError
        
        /** Returns the default value of [param property] of [param class] or its ancestor classes. */
        static class_get_property_default_value(class_: StringName, property: StringName): any
        
        /** Returns whether [param class] (or its ancestry if [param no_inheritance] is `false`) has a method called [param method] or not. */
        static class_has_method(class_: StringName, method: StringName, no_inheritance: boolean = false): boolean
        
        /** Returns the number of arguments of the method [param method] of [param class] or its ancestry if [param no_inheritance] is `false`. */
        static class_get_method_argument_count(class_: StringName, method: StringName, no_inheritance: boolean = false): int64
        
        /** Returns an array with all the methods of [param class] or its ancestry if [param no_inheritance] is `false`. Every element of the array is a [Dictionary] with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.  
         *      
         *  **Note:** In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.  
         */
        static class_get_method_list(class_: StringName, no_inheritance: boolean = false): GArray
        
        /** Returns an array with the names all the integer constants of [param class] or its ancestry. */
        static class_get_integer_constant_list(class_: StringName, no_inheritance: boolean = false): PackedStringArray
        
        /** Returns whether [param class] or its ancestry has an integer constant called [param name] or not. */
        static class_has_integer_constant(class_: StringName, name: StringName): boolean
        
        /** Returns the value of the integer constant [param name] of [param class] or its ancestry. Always returns 0 when the constant could not be found. */
        static class_get_integer_constant(class_: StringName, name: StringName): int64
        
        /** Returns whether [param class] or its ancestry has an enum called [param name] or not. */
        static class_has_enum(class_: StringName, name: StringName, no_inheritance: boolean = false): boolean
        
        /** Returns an array with all the enums of [param class] or its ancestry. */
        static class_get_enum_list(class_: StringName, no_inheritance: boolean = false): PackedStringArray
        
        /** Returns an array with all the keys in [param enum] of [param class] or its ancestry. */
        static class_get_enum_constants(class_: StringName, enum_: StringName, no_inheritance: boolean = false): PackedStringArray
        
        /** Returns which enum the integer constant [param name] of [param class] or its ancestry belongs to. */
        static class_get_integer_constant_enum(class_: StringName, name: StringName, no_inheritance: boolean = false): StringName
        
        /** Returns whether [param class] (or its ancestor classes if [param no_inheritance] is `false`) has an enum called [param enum] that is a bitfield. */
        static is_class_enum_bitfield(class_: StringName, enum_: StringName, no_inheritance: boolean = false): boolean
        
        /** Returns whether this [param class] is enabled or not. */
        static is_class_enabled(class_: StringName): boolean
    }
    // _singleton_class_: Marshalls
    /** Data transformation (marshaling) and encoding helpers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_marshalls.html  
     */
    class Marshalls extends Object {
        /** Returns a Base64-encoded string of the [Variant] [param variant]. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        static variant_to_base64(variant: any, full_objects: boolean = false): string
        
        /** Returns a decoded [Variant] corresponding to the Base64-encoded string [param base64_str]. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        static base64_to_variant(base64_str: string, allow_objects: boolean = false): any
        
        /** Returns a Base64-encoded string of a given [PackedByteArray]. */
        static raw_to_base64(array: PackedByteArray | byte[] | ArrayBuffer): string
        
        /** Returns a decoded [PackedByteArray] corresponding to the Base64-encoded string [param base64_str]. */
        static base64_to_raw(base64_str: string): PackedByteArray
        
        /** Returns a Base64-encoded string of the UTF-8 string [param utf8_str]. */
        static utf8_to_base64(utf8_str: string): string
        
        /** Returns a decoded string corresponding to the Base64-encoded string [param base64_str]. */
        static base64_to_utf8(base64_str: string): string
    }
    // _singleton_class_: TranslationServer
    /** The server responsible for language translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_translationserver.html  
     */
    class TranslationServer extends Object {
        /** Sets the locale of the project. The [param locale] string will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).  
         *  If translations have been loaded beforehand for the new locale, they will be applied.  
         */
        static set_locale(locale: string): void
        
        /** Returns the current locale of the project.  
         *  See also [method OS.get_locale] and [method OS.get_locale_language] to query the locale of the user system.  
         */
        static get_locale(): string
        
        /** Returns the current locale of the editor.  
         *      
         *  **Note:** When called from an exported project returns the same value as [method get_locale].  
         */
        static get_tool_locale(): string
        
        /** Compares two locales and returns a similarity score between `0` (no match) and `10` (full match). */
        static compare_locales(locale_a: string, locale_b: string): int64
        
        /** Returns a [param locale] string standardized to match known locales (e.g. `en-US` would be matched to `en_US`). */
        static standardize_locale(locale: string): string
        
        /** Returns array of known language codes. */
        static get_all_languages(): PackedStringArray
        
        /** Returns a readable language name for the [param language] code. */
        static get_language_name(language: string): string
        
        /** Returns an array of known script codes. */
        static get_all_scripts(): PackedStringArray
        
        /** Returns a readable script name for the [param script] code. */
        static get_script_name(script: string): string
        
        /** Returns an array of known country codes. */
        static get_all_countries(): PackedStringArray
        
        /** Returns a readable country name for the [param country] code. */
        static get_country_name(country: string): string
        
        /** Returns a locale's language and its variant (e.g. `"en_US"` would return `"English (United States)"`). */
        static get_locale_name(locale: string): string
        
        /** Returns the current locale's translation for the given message (key) and context. */
        static translate(message: StringName, context: StringName = ''): StringName
        
        /** Returns the current locale's translation for the given message (key), plural message and context.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        static translate_plural(message: StringName, plural_message: StringName, n: int64, context: StringName = ''): StringName
        
        /** Adds a [Translation] resource. */
        static add_translation(translation: Translation): void
        
        /** Removes the given translation from the server. */
        static remove_translation(translation: Translation): void
        
        /** Returns the [Translation] instance based on the [param locale] passed in.  
         *  It will return `null` if there is no [Translation] instance that matches the [param locale].  
         */
        static get_translation_object(locale: string): Translation
        
        /** Clears the server from all translations. */
        static clear(): void
        
        /** Returns an array of all loaded locales of the project. */
        static get_loaded_locales(): PackedStringArray
        
        /** Reparses the pseudolocalization options and reloads the translation. */
        static reload_pseudolocalization(): void
        
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        static pseudolocalize(message: StringName): StringName
        
        /** If `true`, enables the use of pseudolocalization. See [member ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization] for details. */
        get pseudolocalization_enabled(): boolean
        set pseudolocalization_enabled(value: boolean)
    }
    // _singleton_class_: Input
    namespace Input {
        enum MouseMode {
            /** Makes the mouse cursor visible if it is hidden. */
            MOUSE_MODE_VISIBLE = 0,
            
            /** Makes the mouse cursor hidden if it is visible. */
            MOUSE_MODE_HIDDEN = 1,
            
            /** Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.  
             *      
             *  **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].  
             */
            MOUSE_MODE_CAPTURED = 2,
            
            /** Confines the mouse cursor to the game window, and make it visible. */
            MOUSE_MODE_CONFINED = 3,
            
            /** Confines the mouse cursor to the game window, and make it hidden. */
            MOUSE_MODE_CONFINED_HIDDEN = 4,
        }
        enum CursorShape {
            /** Arrow cursor. Standard, default pointing cursor. */
            CURSOR_ARROW = 0,
            
            /** I-beam cursor. Usually used to show where the text cursor will appear when the mouse is clicked. */
            CURSOR_IBEAM = 1,
            
            /** Pointing hand cursor. Usually used to indicate the pointer is over a link or other interactable item. */
            CURSOR_POINTING_HAND = 2,
            
            /** Cross cursor. Typically appears over regions in which a drawing operation can be performed or for selections. */
            CURSOR_CROSS = 3,
            
            /** Wait cursor. Indicates that the application is busy performing an operation, and that it cannot be used during the operation (e.g. something is blocking its main thread). */
            CURSOR_WAIT = 4,
            
            /** Busy cursor. Indicates that the application is busy performing an operation, and that it is still usable during the operation. */
            CURSOR_BUSY = 5,
            
            /** Drag cursor. Usually displayed when dragging something.  
             *      
             *  **Note:** Windows lacks a dragging cursor, so [constant CURSOR_DRAG] is the same as [constant CURSOR_MOVE] for this platform.  
             */
            CURSOR_DRAG = 6,
            
            /** Can drop cursor. Usually displayed when dragging something to indicate that it can be dropped at the current position. */
            CURSOR_CAN_DROP = 7,
            
            /** Forbidden cursor. Indicates that the current action is forbidden (for example, when dragging something) or that the control at a position is disabled. */
            CURSOR_FORBIDDEN = 8,
            
            /** Vertical resize mouse cursor. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically. */
            CURSOR_VSIZE = 9,
            
            /** Horizontal resize mouse cursor. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally. */
            CURSOR_HSIZE = 10,
            
            /** Window resize mouse cursor. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically. */
            CURSOR_BDIAGSIZE = 11,
            
            /** Window resize mouse cursor. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically. */
            CURSOR_FDIAGSIZE = 12,
            
            /** Move cursor. Indicates that something can be moved. */
            CURSOR_MOVE = 13,
            
            /** Vertical split mouse cursor. On Windows, it's the same as [constant CURSOR_VSIZE]. */
            CURSOR_VSPLIT = 14,
            
            /** Horizontal split mouse cursor. On Windows, it's the same as [constant CURSOR_HSIZE]. */
            CURSOR_HSPLIT = 15,
            
            /** Help cursor. Usually a question mark. */
            CURSOR_HELP = 16,
        }
    }
    /** A singleton for handling inputs.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_input.html  
     */
    class Input extends Object {
        /** Returns `true` if any action, key, joypad button, or mouse button is being pressed. This will also return `true` if any action is simulated via code by calling [method action_press]. */
        static is_anything_pressed(): boolean
        
        /** Returns `true` if you are pressing the Latin key in the current keyboard layout. You can pass a [enum Key] constant.  
         *  [method is_key_pressed] is only recommended over [method is_physical_key_pressed] in non-game applications. This ensures that shortcut keys behave as expected depending on the user's keyboard layout, as keyboard shortcuts are generally dependent on the keyboard layout in non-game applications. If in doubt, use [method is_physical_key_pressed].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.3/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static is_key_pressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the key in the physical location on the 101/102-key US QWERTY keyboard. You can pass a [enum Key] constant.  
         *  [method is_physical_key_pressed] is recommended over [method is_key_pressed] for in-game actions, as it will make [kbd]W[/kbd]/[kbd]A[/kbd]/[kbd]S[/kbd]/[kbd]D[/kbd] layouts work regardless of the user's keyboard layout. [method is_physical_key_pressed] will also ensure that the top row number keys work on any keyboard layout. If in doubt, use [method is_physical_key_pressed].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_physical_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.3/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static is_physical_key_pressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the key with the [param keycode] printed on it. You can pass a [enum Key] constant or any Unicode character code. */
        static is_key_label_pressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the mouse button specified with [enum MouseButton]. */
        static is_mouse_button_pressed(button: MouseButton): boolean
        
        /** Returns `true` if you are pressing the joypad button (see [enum JoyButton]). */
        static is_joy_button_pressed(device: int64, button: JoyButton): boolean
        
        /** Returns `true` if you are pressing the action event.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.3/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static is_action_pressed(action: StringName, exact_match: boolean = false): boolean
        
        /** Returns `true` when the user has  *started*  pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user pressed down the button.  
         *  This is useful for code that needs to run only once when an action is pressed, instead of every frame while it's pressed.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Returning `true` does not imply that the action is  *still*  pressed. An action can be pressed and released again rapidly, and `true` will still be returned so as not to miss input.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_just_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/4.3/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         *      
         *  **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_pressed] instead to query the action state of the current event.  
         */
        static is_action_just_pressed(action: StringName, exact_match: boolean = false): boolean
        
        /** Returns `true` when the user  *stops*  pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user releases the button.  
         *      
         *  **Note:** Returning `true` does not imply that the action is  *still*  not pressed. An action can be released and pressed again rapidly, and `true` will still be returned so as not to miss input.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_released] instead to query the action state of the current event.  
         */
        static is_action_just_released(action: StringName, exact_match: boolean = false): boolean
        
        /** Returns a value between 0 and 1 representing the intensity of the given action. In a joypad, for example, the further away the axis (analog sticks or L2, R2 triggers) is from the dead zone, the closer the value will be to 1. If the action is mapped to a control that has no axis such as the keyboard, the value returned will be 0 or 1.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static get_action_strength(action: StringName, exact_match: boolean = false): float64
        
        /** Returns a value between 0 and 1 representing the raw intensity of the given action, ignoring the action's deadzone. In most cases, you should use [method get_action_strength] instead.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static get_action_raw_strength(action: StringName, exact_match: boolean = false): float64
        
        /** Get axis input by specifying two actions, one negative and one positive.  
         *  This is a shorthand for writing `Input.get_action_strength("positive_action") - Input.get_action_strength("negative_action")`.  
         */
        static get_axis(negative_action: StringName, positive_action: StringName): float64
        
        /** Gets an input vector by specifying four actions for the positive and negative X and Y axes.  
         *  This method is useful when getting vector input, such as from a joystick, directional pad, arrows, or WASD. The vector has its length limited to 1 and has a circular deadzone, which is useful for using vector input as movement.  
         *  By default, the deadzone is automatically calculated from the average of the action deadzones. However, you can override the deadzone to be whatever you want (on the range of 0 to 1).  
         */
        static get_vector(negative_x: StringName, positive_x: StringName, negative_y: StringName, positive_y: StringName, deadzone: float64 = -1): Vector2
        
        /** Adds a new mapping entry (in SDL2 format) to the mapping database. Optionally update already connected devices. */
        static add_joy_mapping(mapping: string, update_existing: boolean = false): void
        
        /** Removes all mappings from the internal database that match the given GUID. */
        static remove_joy_mapping(guid: string): void
        
        /** Returns `true` if the system knows the specified device. This means that it sets all button and axis indices. Unknown joypads are not expected to match these constants, but you can still retrieve events from them. */
        static is_joy_known(device: int64): boolean
        
        /** Returns the current value of the joypad axis at given index (see [enum JoyAxis]). */
        static get_joy_axis(device: int64, axis: JoyAxis): float64
        
        /** Returns the name of the joypad at the specified device index, e.g. `PS4 Controller`. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names. */
        static get_joy_name(device: int64): string
        
        /** Returns an SDL2-compatible device GUID on platforms that use gamepad remapping, e.g. `030000004c050000c405000000010000`. Returns `"Default Gamepad"` otherwise. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names and mappings based on this GUID. */
        static get_joy_guid(device: int64): string
        
        /** Returns a dictionary with extra platform-specific information about the device, e.g. the raw gamepad name from the OS or the Steam Input index.  
         *  On Windows the dictionary contains the following fields:  
         *  `xinput_index`: The index of the controller in the XInput system.  
         *  On Linux:  
         *  `raw_name`: The name of the controller as it came from the OS, before getting renamed by the godot controller database.  
         *  `vendor_id`: The USB vendor ID of the device.  
         *  `product_id`: The USB product ID of the device.  
         *  `steam_input_index`: The Steam Input gamepad index, if the device is not a Steam Input device this key won't be present.  
         */
        static get_joy_info(device: int64): GDictionary
        
        /** Queries whether an input device should be ignored or not. Devices can be ignored by setting the environment variable `SDL_GAMECONTROLLER_IGNORE_DEVICES`. Read the [url=https://wiki.libsdl.org/SDL2]SDL documentation[/url] for more information.  
         *      
         *  **Note:** Some 3rd party tools can contribute to the list of ignored devices. For example,  *SteamInput*  creates virtual devices from physical devices for remapping purposes. To avoid handling the same input device twice, the original device is added to the ignore list.  
         */
        static should_ignore_device(vendor_id: int64, product_id: int64): boolean
        
        /** Returns an [Array] containing the device IDs of all currently connected joypads. */
        static get_connected_joypads(): GArray
        
        /** Returns the strength of the joypad vibration: x is the strength of the weak motor, and y is the strength of the strong motor. */
        static get_joy_vibration_strength(device: int64): Vector2
        
        /** Returns the duration of the current vibration effect in seconds. */
        static get_joy_vibration_duration(device: int64): float64
        
        /** Starts to vibrate the joypad. Joypads usually come with two rumble motors, a strong and a weak one. [param weak_magnitude] is the strength of the weak motor (between 0 and 1) and [param strong_magnitude] is the strength of the strong motor (between 0 and 1). [param duration] is the duration of the effect in seconds (a duration of 0 will try to play the vibration indefinitely). The vibration can be stopped early by calling [method stop_joy_vibration].  
         *      
         *  **Note:** Not every hardware is compatible with long effect durations; it is recommended to restart an effect if it has to be played for more than a few seconds.  
         *      
         *  **Note:** For macOS, vibration is only supported in macOS 11 and later.  
         */
        static start_joy_vibration(device: int64, weak_magnitude: float64, strong_magnitude: float64, duration: float64 = 0): void
        
        /** Stops the vibration of the joypad started with [method start_joy_vibration]. */
        static stop_joy_vibration(device: int64): void
        
        /** Vibrate the handheld device for the specified duration in milliseconds.  
         *  [param amplitude] is the strength of the vibration, as a value between `0.0` and `1.0`. If set to `-1.0`, the default vibration strength of the device is used.  
         *      
         *  **Note:** This method is implemented on Android, iOS, and Web. It has no effect on other platforms.  
         *      
         *  **Note:** For Android, [method vibrate_handheld] requires enabling the `VIBRATE` permission in the export preset. Otherwise, [method vibrate_handheld] will have no effect.  
         *      
         *  **Note:** For iOS, specifying the duration is only supported in iOS 13 and later.  
         *      
         *  **Note:** For Web, the amplitude cannot be changed.  
         *      
         *  **Note:** Some web browsers such as Safari and Firefox for Android do not support [method vibrate_handheld].  
         */
        static vibrate_handheld(duration_ms: int64 = 500, amplitude: float64 = -1): void
        
        /** Returns the gravity in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         */
        static get_gravity(): Vector3
        
        /** Returns the acceleration in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *  Note this method returns an empty [Vector3] when running from the editor even when your device has an accelerometer. You must export your project to a supported device to read values from the accelerometer.  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         */
        static get_accelerometer(): Vector3
        
        /** Returns the magnetic field strength in micro-Tesla for all axes of the device's magnetometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         */
        static get_magnetometer(): Vector3
        
        /** Returns the rotation rate in rad/s around a device's X, Y, and Z axes of the gyroscope sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         */
        static get_gyroscope(): Vector3
        
        /** Sets the gravity value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static set_gravity(value: Vector3): void
        
        /** Sets the acceleration value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static set_accelerometer(value: Vector3): void
        
        /** Sets the value of the magnetic field of the magnetometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static set_magnetometer(value: Vector3): void
        
        /** Sets the value of the rotation rate of the gyroscope sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static set_gyroscope(value: Vector3): void
        
        /** Returns the last mouse velocity. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
        static get_last_mouse_velocity(): Vector2
        
        /** Returns the last mouse velocity in screen coordinates. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
        static get_last_mouse_screen_velocity(): Vector2
        
        /** Returns mouse buttons as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method DisplayServer.mouse_get_button_state]. */
        static get_mouse_button_mask(): MouseButtonMask
        
        /** Sets the mouse position to the specified vector, provided in pixels and relative to an origin at the upper left corner of the currently focused Window Manager game window.  
         *  Mouse position is clipped to the limits of the screen resolution, or to the limits of the game window if [enum MouseMode] is set to [constant MOUSE_MODE_CONFINED] or [constant MOUSE_MODE_CONFINED_HIDDEN].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        static warp_mouse(position: Vector2): void
        
        /** This will simulate pressing the specified action.  
         *  The strength can be used for non-boolean actions, it's ranged between 0 and 1 representing the intensity of the given action.  
         *      
         *  **Note:** This method will not cause any [method Node._input] calls. It is intended to be used with [method is_action_pressed] and [method is_action_just_pressed]. If you want to simulate `_input`, use [method parse_input_event] instead.  
         */
        static action_press(action: StringName, strength: float64 = 1): void
        
        /** If the specified action is already pressed, this will release it. */
        static action_release(action: StringName): void
        
        /** Sets the default cursor shape to be used in the viewport instead of [constant CURSOR_ARROW].  
         *      
         *  **Note:** If you want to change the default cursor shape for [Control]'s nodes, use [member Control.mouse_default_cursor_shape] instead.  
         *      
         *  **Note:** This method generates an [InputEventMouseMotion] to update cursor immediately.  
         */
        static set_default_cursor_shape(shape: Input.CursorShape = 0): void
        
        /** Returns the currently assigned cursor shape (see [enum CursorShape]). */
        static get_current_cursor_shape(): Input.CursorShape
        
        /** Sets a custom mouse cursor image, which is only visible inside the game window. The hotspot can also be specified. Passing `null` to the image parameter resets to the system cursor. See [enum CursorShape] for the list of shapes.  
         *  [param image] can be either [Texture2D] or [Image] and its size must be lower than or equal to 256×256. To avoid rendering issues, sizes lower than or equal to 128×128 are recommended.  
         *  [param hotspot] must be within [param image]'s size.  
         *      
         *  **Note:** [AnimatedTexture]s aren't supported as custom mouse cursors. If using an [AnimatedTexture], only the first frame will be displayed.  
         *      
         *  **Note:** The **Lossless**, **Lossy** or **Uncompressed** compression modes are recommended. The **Video RAM** compression mode can be used, but it will be decompressed on the CPU, which means loading times are slowed down and no memory is saved compared to lossless modes.  
         *      
         *  **Note:** On the web platform, the maximum allowed cursor image size is 128×128. Cursor images larger than 32×32 will also only be displayed if the mouse cursor image is entirely located within the page for [url=https://chromestatus.com/feature/5825971391299584]security reasons[/url].  
         */
        static set_custom_mouse_cursor(image: Resource, shape: Input.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        
        /** Feeds an [InputEvent] to the game. Can be used to artificially trigger input events from code. Also generates [method Node._input] calls.  
         *  **Example:**  
         *    
         *      
         *  **Note:** Calling this function has no influence on the operating system. So for example sending an [InputEventMouseMotion] will not move the OS mouse cursor to the specified position (use [method warp_mouse] instead) and sending [kbd]Alt/Cmd + Tab[/kbd] as [InputEventKey] won't toggle between active windows.  
         */
        static parse_input_event(event: InputEvent): void
        
        /** Sends all input events which are in the current buffer to the game loop. These events may have been buffered as a result of accumulated input ([member use_accumulated_input]) or agile input flushing ([member ProjectSettings.input_devices/buffering/agile_event_flushing]).  
         *  The engine will already do this itself at key execution points (at least once per frame). However, this can be useful in advanced cases where you want precise control over the timing of event handling.  
         */
        static flush_buffered_events(): void
        
        /** Controls the mouse mode. See [enum MouseMode] for more information. */
        get mouse_mode(): int64
        set mouse_mode(value: int64)
        
        /** If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.  
         *  Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage. In applications where drawing freehand lines is required, input accumulation should generally be disabled while the user is drawing the line to get results that closely follow the actual input.  
         *      
         *  **Note:** Input accumulation is  *enabled*  by default.  
         */
        get use_accumulated_input(): boolean
        set use_accumulated_input(value: boolean)
        
        /** If `true`, sends mouse input events when tapping or swiping on the touchscreen. See also [member ProjectSettings.input_devices/pointing/emulate_mouse_from_touch]. */
        get emulate_mouse_from_touch(): boolean
        set emulate_mouse_from_touch(value: boolean)
        
        /** If `true`, sends touch input events when clicking or dragging the mouse. See also [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse]. */
        get emulate_touch_from_mouse(): boolean
        set emulate_touch_from_mouse(value: boolean)
        
        /** Emitted when a joypad device has been connected or disconnected. */
        static readonly joy_connection_changed: Signal2<int64, boolean>
    }
    // _singleton_class_: InputMap
    /** A singleton that manages all [InputEventAction]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_inputmap.html  
     */
    class InputMap extends Object {
        /** Returns `true` if the [InputMap] has a registered action with the given name. */
        static has_action(action: StringName): boolean
        
        /** Returns an array of all actions in the [InputMap]. */
        static get_actions(): GArray
        
        /** Adds an empty action to the [InputMap] with a configurable [param deadzone].  
         *  An [InputEvent] can then be added to this action with [method action_add_event].  
         */
        static add_action(action: StringName, deadzone: float64 = 0.5): void
        
        /** Removes an action from the [InputMap]. */
        static erase_action(action: StringName): void
        
        /** Sets a deadzone value for the action. */
        static action_set_deadzone(action: StringName, deadzone: float64): void
        
        /** Returns a deadzone value for the action. */
        static action_get_deadzone(action: StringName): float64
        
        /** Adds an [InputEvent] to an action. This [InputEvent] will trigger the action. */
        static action_add_event(action: StringName, event: InputEvent): void
        
        /** Returns `true` if the action has the given [InputEvent] associated with it. */
        static action_has_event(action: StringName, event: InputEvent): boolean
        
        /** Removes an [InputEvent] from an action. */
        static action_erase_event(action: StringName, event: InputEvent): void
        
        /** Removes all events from an action. */
        static action_erase_events(action: StringName): void
        
        /** Returns an array of [InputEvent]s associated with a given action.  
         *      
         *  **Note:** When used in the editor (e.g. a tool script or [EditorPlugin]), this method will return events for the editor action. If you want to access your project's input binds from the editor, read the `input/*` settings from [ProjectSettings].  
         */
        static action_get_events(action: StringName): GArray
        
        /** Returns `true` if the given event is part of an existing action. This method ignores keyboard modifiers if the given [InputEvent] is not pressed (for proper release detection). See [method action_has_event] if you don't want this behavior.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static event_is_action(event: InputEvent, action: StringName, exact_match: boolean = false): boolean
        
        /** Clears all [InputEventAction] in the [InputMap] and load it anew from [ProjectSettings]. */
        static load_from_project_settings(): void
    }
    // _singleton_class_: EngineDebugger
    /** Exposes the internal debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_enginedebugger.html  
     */
    class EngineDebugger extends Object {
        /** Returns `true` if the debugger is active otherwise `false`. */
        static is_active(): boolean
        
        /** Registers a profiler with the given [param name]. See [EngineProfiler] for more information. */
        static register_profiler(name: StringName, profiler: EngineProfiler): void
        
        /** Unregisters a profiler with given [param name]. */
        static unregister_profiler(name: StringName): void
        
        /** Returns `true` if a profiler with the given name is present and active otherwise `false`. */
        static is_profiling(name: StringName): boolean
        
        /** Returns `true` if a profiler with the given name is present otherwise `false`. */
        static has_profiler(name: StringName): boolean
        
        /** Calls the `add` callable of the profiler with given [param name] and [param data]. */
        static profiler_add_frame_data(name: StringName, data: GArray): void
        
        /** Calls the `toggle` callable of the profiler with given [param name] and [param arguments]. Enables/Disables the same profiler depending on [param enable] argument. */
        static profiler_enable(name: StringName, enable: boolean, arguments_: GArray = []): void
        
        /** Registers a message capture with given [param name]. If [param name] is "my_message" then messages starting with "my_message:" will be called with the given callable.  
         *  Callable must accept a message string and a data array as argument. If the message and data are valid then callable must return `true` otherwise `false`.  
         */
        static register_message_capture(name: StringName, callable: Callable): void
        
        /** Unregisters the message capture with given [param name]. */
        static unregister_message_capture(name: StringName): void
        
        /** Returns `true` if a capture with the given name is present otherwise `false`. */
        static has_capture(name: StringName): boolean
        
        /** Forces a processing loop of debugger events. The purpose of this method is just processing events every now and then when the script might get too busy, so that bugs like infinite loops can be caught */
        static line_poll(): void
        
        /** Sends a message with given [param message] and [param data] array. */
        static send_message(message: string, data: GArray): void
        
        /** Starts a debug break in script execution, optionally specifying whether the program can continue based on [param can_continue] and whether the break was due to a breakpoint. */
        static debug(can_continue: boolean = true, is_error_breakpoint: boolean = false): void
        
        /** Starts a debug break in script execution, optionally specifying whether the program can continue based on [param can_continue] and whether the break was due to a breakpoint. */
        static script_debug(language: ScriptLanguage, can_continue: boolean = true, is_error_breakpoint: boolean = false): void
        
        /** Sets the current debugging lines that remain. */
        static set_lines_left(lines: int64): void
        
        /** Returns the number of lines that remain. */
        static get_lines_left(): int64
        
        /** Sets the current debugging depth. */
        static set_depth(depth: int64): void
        
        /** Returns the current debug depth. */
        static get_depth(): int64
        
        /** Returns `true` if the given [param source] and [param line] represent an existing breakpoint. */
        static is_breakpoint(line: int64, source: StringName): boolean
        
        /** Returns `true` if the debugger is skipping breakpoints otherwise `false`. */
        static is_skipping_breakpoints(): boolean
        
        /** Inserts a new breakpoint with the given [param source] and [param line]. */
        static insert_breakpoint(line: int64, source: StringName): void
        
        /** Removes a breakpoint with the given [param source] and [param line]. */
        static remove_breakpoint(line: int64, source: StringName): void
        
        /** Clears all breakpoints. */
        static clear_breakpoints(): void
    }
    // _singleton_class_: Time
    namespace Time {
        enum Month {
            /** The month of January, represented numerically as `01`. */
            MONTH_JANUARY = 1,
            
            /** The month of February, represented numerically as `02`. */
            MONTH_FEBRUARY = 2,
            
            /** The month of March, represented numerically as `03`. */
            MONTH_MARCH = 3,
            
            /** The month of April, represented numerically as `04`. */
            MONTH_APRIL = 4,
            
            /** The month of May, represented numerically as `05`. */
            MONTH_MAY = 5,
            
            /** The month of June, represented numerically as `06`. */
            MONTH_JUNE = 6,
            
            /** The month of July, represented numerically as `07`. */
            MONTH_JULY = 7,
            
            /** The month of August, represented numerically as `08`. */
            MONTH_AUGUST = 8,
            
            /** The month of September, represented numerically as `09`. */
            MONTH_SEPTEMBER = 9,
            
            /** The month of October, represented numerically as `10`. */
            MONTH_OCTOBER = 10,
            
            /** The month of November, represented numerically as `11`. */
            MONTH_NOVEMBER = 11,
            
            /** The month of December, represented numerically as `12`. */
            MONTH_DECEMBER = 12,
        }
        enum Weekday {
            /** The day of the week Sunday, represented numerically as `0`. */
            WEEKDAY_SUNDAY = 0,
            
            /** The day of the week Monday, represented numerically as `1`. */
            WEEKDAY_MONDAY = 1,
            
            /** The day of the week Tuesday, represented numerically as `2`. */
            WEEKDAY_TUESDAY = 2,
            
            /** The day of the week Wednesday, represented numerically as `3`. */
            WEEKDAY_WEDNESDAY = 3,
            
            /** The day of the week Thursday, represented numerically as `4`. */
            WEEKDAY_THURSDAY = 4,
            
            /** The day of the week Friday, represented numerically as `5`. */
            WEEKDAY_FRIDAY = 5,
            
            /** The day of the week Saturday, represented numerically as `6`. */
            WEEKDAY_SATURDAY = 6,
        }
    }
    /** A singleton for working with time data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_time.html  
     */
    class Time extends Object {
        /** Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, and `second`.  
         *  The returned Dictionary's values will be the same as the [method get_datetime_dict_from_system] if the Unix timestamp is the current time, with the exception of Daylight Savings Time as it cannot be determined from the epoch.  
         */
        static get_datetime_dict_from_unix_time(unix_time_val: int64): GDictionary
        
        /** Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, and `weekday`. */
        static get_date_dict_from_unix_time(unix_time_val: int64): GDictionary
        
        /** Converts the given time to a dictionary of keys: `hour`, `minute`, and `second`. */
        static get_time_dict_from_unix_time(unix_time_val: int64): GDictionary
        
        /** Converts the given Unix timestamp to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static get_datetime_string_from_unix_time(unix_time_val: int64, use_space: boolean = false): string
        
        /** Converts the given Unix timestamp to an ISO 8601 date string (YYYY-MM-DD). */
        static get_date_string_from_unix_time(unix_time_val: int64): string
        
        /** Converts the given Unix timestamp to an ISO 8601 time string (HH:MM:SS). */
        static get_time_string_from_unix_time(unix_time_val: int64): string
        
        /** Converts the given ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS) to a dictionary of keys: `year`, `month`, `day`, [code skip-lint]weekday`, `hour`, `minute`, and `second`.  
         *  If [param weekday] is `false`, then the [code skip-lint]weekday` entry is excluded (the calculation is relatively expensive).  
         *      
         *  **Note:** Any decimal fraction in the time string will be ignored silently.  
         */
        static get_datetime_dict_from_datetime_string(datetime: string, weekday: boolean): GDictionary
        
        /** Converts the given dictionary of keys to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.  
         *  If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static get_datetime_string_from_datetime_dict(datetime: GDictionary, use_space: boolean): string
        
        /** Converts a dictionary of time values to a Unix timestamp.  
         *  The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.  
         *  If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).  
         *  You can pass the output from [method get_datetime_dict_from_unix_time] directly into this function and get the same as what was put in.  
         *      
         *  **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime dictionary.  
         */
        static get_unix_time_from_datetime_dict(datetime: GDictionary): int64
        
        /** Converts the given ISO 8601 date and/or time string to a Unix timestamp. The string can contain a date only, a time only, or both.  
         *      
         *  **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime string.  
         *      
         *  **Note:** Any decimal fraction in the time string will be ignored silently.  
         */
        static get_unix_time_from_datetime_string(datetime: string): int64
        
        /** Converts the given timezone offset in minutes to a timezone offset string. For example, -480 returns "-08:00", 345 returns "+05:45", and 0 returns "+00:00". */
        static get_offset_string_from_offset_minutes(offset_minutes: int64): string
        
        /** Returns the current date as a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, `second`, and `dst` (Daylight Savings Time). */
        static get_datetime_dict_from_system(utc: boolean = false): GDictionary
        
        /** Returns the current date as a dictionary of keys: `year`, `month`, `day`, and `weekday`.  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static get_date_dict_from_system(utc: boolean = false): GDictionary
        
        /** Returns the current time as a dictionary of keys: `hour`, `minute`, and `second`.  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static get_time_dict_from_system(utc: boolean = false): GDictionary
        
        /** Returns the current date and time as an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static get_datetime_string_from_system(utc: boolean = false, use_space: boolean = false): string
        
        /** Returns the current date as an ISO 8601 date string (YYYY-MM-DD).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static get_date_string_from_system(utc: boolean = false): string
        
        /** Returns the current time as an ISO 8601 time string (HH:MM:SS).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static get_time_string_from_system(utc: boolean = false): string
        
        /** Returns the current time zone as a dictionary of keys: `bias` and `name`.  
         *  - `bias` is the offset from UTC in minutes, since not all time zones are multiples of an hour from UTC.  
         *  - `name` is the localized name of the time zone, according to the OS locale settings of the current user.  
         */
        static get_time_zone_from_system(): GDictionary
        
        /** Returns the current Unix timestamp in seconds based on the system time in UTC. This method is implemented by the operating system and always returns the time in UTC. The Unix timestamp is the number of seconds passed since 1970-01-01 at 00:00:00, the [url=https://en.wikipedia.org/wiki/Unix_time]Unix epoch[/url].  
         *      
         *  **Note:** Unlike other methods that use integer timestamps, this method returns the timestamp as a [float] for sub-second precision.  
         */
        static get_unix_time_from_system(): float64
        
        /** Returns the amount of time passed in milliseconds since the engine started.  
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly 500 million years).  
         */
        static get_ticks_msec(): int64
        
        /** Returns the amount of time passed in microseconds since the engine started.  
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly half a million years).  
         */
        static get_ticks_usec(): int64
    }
    // _singleton_class_: GDExtensionManager
    namespace GDExtensionManager {
        enum LoadStatus {
            /** The extension has loaded successfully. */
            LOAD_STATUS_OK = 0,
            
            /** The extension has failed to load, possibly because it does not exist or has missing dependencies. */
            LOAD_STATUS_FAILED = 1,
            
            /** The extension has already been loaded. */
            LOAD_STATUS_ALREADY_LOADED = 2,
            
            /** The extension has not been loaded. */
            LOAD_STATUS_NOT_LOADED = 3,
            
            /** The extension requires the application to restart to fully load. */
            LOAD_STATUS_NEEDS_RESTART = 4,
        }
    }
    /** Provides access to GDExtension functionality.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_gdextensionmanager.html  
     */
    class GDExtensionManager extends Object {
        /** Loads an extension by absolute file path. The [param path] needs to point to a valid [GDExtension]. Returns [constant LOAD_STATUS_OK] if successful. */
        static load_extension(path: string): GDExtensionManager.LoadStatus
        
        /** Reloads the extension at the given file path. The [param path] needs to point to a valid [GDExtension], otherwise this method may return either [constant LOAD_STATUS_NOT_LOADED] or [constant LOAD_STATUS_FAILED].  
         *      
         *  **Note:** You can only reload extensions in the editor. In release builds, this method always fails and returns [constant LOAD_STATUS_FAILED].  
         */
        static reload_extension(path: string): GDExtensionManager.LoadStatus
        
        /** Unloads an extension by file path. The [param path] needs to point to an already loaded [GDExtension], otherwise this method returns [constant LOAD_STATUS_NOT_LOADED]. */
        static unload_extension(path: string): GDExtensionManager.LoadStatus
        
        /** Returns `true` if the extension at the given file [param path] has already been loaded successfully. See also [method get_loaded_extensions]. */
        static is_extension_loaded(path: string): boolean
        
        /** Returns the file paths of all currently loaded extensions. */
        static get_loaded_extensions(): PackedStringArray
        
        /** Returns the [GDExtension] at the given file [param path], or `null` if it has not been loaded or does not exist. */
        static get_extension(path: string): GDExtension
        
        /** Emitted after the editor has finished reloading one or more extensions. */
        static readonly extensions_reloaded: Signal0
    }
    // _singleton_class_: ResourceUID
    /** A singleton that manages the unique identifiers of all resources within a project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_resourceuid.html  
     */
    class ResourceUID extends Object {
        /** The value to use for an invalid UID, for example if the resource could not be loaded.  
         *  Its text representation is `uid://<invalid>`.  
         */
        static readonly INVALID_ID = -1
        
        /** Converts the given UID to a `uid://` string value. */
        static id_to_text(id: int64): string
        
        /** Extracts the UID value from the given `uid://` string. */
        static text_to_id(text_id: string): int64
        
        /** Generates a random resource UID which is guaranteed to be unique within the list of currently loaded UIDs.  
         *  In order for this UID to be registered, you must call [method add_id] or [method set_id].  
         */
        static create_id(): int64
        
        /** Returns whether the given UID value is known to the cache. */
        static has_id(id: int64): boolean
        
        /** Adds a new UID value which is mapped to the given resource path.  
         *  Fails with an error if the UID already exists, so be sure to check [method has_id] beforehand, or use [method set_id] instead.  
         */
        static add_id(id: int64, path: string): void
        
        /** Updates the resource path of an existing UID.  
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand, or use [method add_id] instead.  
         */
        static set_id(id: int64, path: string): void
        
        /** Returns the path that the given UID value refers to.  
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.  
         */
        static get_id_path(id: int64): string
        
        /** Removes a loaded UID value from the cache.  
         *  Fails with an error if the UID does not exist, so be sure to check [method has_id] beforehand.  
         */
        static remove_id(id: int64): void
    }
    // _singleton_class_: WorkerThreadPool
    /** A singleton that allocates some [Thread]s on startup, used to offload tasks to these threads.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_workerthreadpool.html  
     */
    class WorkerThreadPool extends Object {
        /** Adds [param action] as a task to be executed by a worker thread. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.  
         *  Returns a task ID that can be used by other methods.  
         *  **Warning:** Every task must be waited for completion using [method wait_for_task_completion] or [method wait_for_group_task_completion] at some point so that any allocated resources inside the task can be cleaned up.  
         */
        static add_task(action: Callable, high_priority: boolean = false, description: string = ''): int64
        
        /** Returns `true` if the task with the given ID is completed.  
         *      
         *  **Note:** You should only call this method between adding the task and awaiting its completion.  
         */
        static is_task_completed(task_id: int64): boolean
        
        /** Pauses the thread that calls this method until the task with the given ID is completed.  
         *  Returns [constant @GlobalScope.OK] if the task could be successfully awaited.  
         *  Returns [constant @GlobalScope.ERR_INVALID_PARAMETER] if a task with the passed ID does not exist (maybe because it was already awaited and disposed of).  
         *  Returns [constant @GlobalScope.ERR_BUSY] if the call is made from another running task and, due to task scheduling, there's potential for deadlocking (e.g., the task to await may be at a lower level in the call stack and therefore can't progress). This is an advanced situation that should only matter when some tasks depend on others (in the current implementation, the tricky case is a task trying to wait on an older one).  
         */
        static wait_for_task_completion(task_id: int64): GError
        
        /** Adds [param action] as a group task to be executed by the worker threads. The [Callable] will be called a number of times based on [param elements], with the first thread calling it with the value `0` as a parameter, and each consecutive execution incrementing this value by 1 until it reaches `element - 1`.  
         *  The number of threads the task is distributed to is defined by [param tasks_needed], where the default value `-1` means it is distributed to all worker threads. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.  
         *  Returns a group task ID that can be used by other methods.  
         *  **Warning:** Every task must be waited for completion using [method wait_for_task_completion] or [method wait_for_group_task_completion] at some point so that any allocated resources inside the task can be cleaned up.  
         */
        static add_group_task(action: Callable, elements: int64, tasks_needed: int64 = -1, high_priority: boolean = false, description: string = ''): int64
        
        /** Returns `true` if the group task with the given ID is completed.  
         *      
         *  **Note:** You should only call this method between adding the group task and awaiting its completion.  
         */
        static is_group_task_completed(group_id: int64): boolean
        
        /** Returns how many times the [Callable] of the group task with the given ID has already been executed by the worker threads.  
         *      
         *  **Note:** If a thread has started executing the [Callable] but is yet to finish, it won't be counted.  
         */
        static get_group_processed_element_count(group_id: int64): int64
        
        /** Pauses the thread that calls this method until the group task with the given ID is completed. */
        static wait_for_group_task_completion(group_id: int64): void
    }
    // _singleton_class_: ThemeDB
    /** A singleton that provides access to static information about [Theme] resources used by the engine and by your project.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_themedb.html  
     */
    class ThemeDB extends Object {
        /** Returns a reference to the default engine [Theme]. This theme resource is responsible for the out-of-the-box look of [Control] nodes and cannot be overridden. */
        static get_default_theme(): Theme
        
        /** Returns a reference to the custom project [Theme]. This theme resources allows to override the default engine theme for every control node in the project.  
         *  To set the project theme, see [member ProjectSettings.gui/theme/custom].  
         */
        static get_project_theme(): Theme
        
        /** The fallback base scale factor of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_base_scale].  
         */
        get fallback_base_scale(): float64
        set fallback_base_scale(value: float64)
        
        /** The fallback font of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_font].  
         */
        get fallback_font(): Font
        set fallback_font(value: Font)
        
        /** The fallback font size of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_font_size].  
         */
        get fallback_font_size(): int64
        set fallback_font_size(value: int64)
        
        /** The fallback icon of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        get fallback_icon(): Texture2D
        set fallback_icon(value: Texture2D)
        
        /** The fallback stylebox of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        get fallback_stylebox(): StyleBox
        set fallback_stylebox(value: StyleBox)
        
        /** Emitted when one of the fallback values had been changed. Use it to refresh the look of controls that may rely on the fallback theme items. */
        static readonly fallback_changed: Signal0
    }
    // _singleton_class_: EditorInterface
    /** Godot editor's interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_editorinterface.html  
     */
    class EditorInterface extends Object {
        /** Restarts the editor. This closes the editor and then opens the same project. If [param save] is `true`, the project will be saved before restarting. */
        static restart_editor(save: boolean = true): void
        
        /** Returns the editor's [EditorCommandPalette] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static get_command_palette(): EditorCommandPalette
        
        /** Returns the editor's [EditorFileSystem] instance. */
        static get_resource_filesystem(): EditorFileSystem
        
        /** Returns the [EditorPaths] singleton. */
        static get_editor_paths(): EditorPaths
        
        /** Returns the editor's [EditorResourcePreview] instance. */
        static get_resource_previewer(): EditorResourcePreview
        
        /** Returns the editor's [EditorSelection] instance. */
        static get_selection(): EditorSelection
        
        /** Returns the editor's [EditorSettings] instance. */
        static get_editor_settings(): EditorSettings
        
        /** Returns mesh previews rendered at the given size as an [Array] of [Texture2D]s. */
        static make_mesh_previews(meshes: GArray, preview_size: int64): GArray
        
        /** Sets the enabled status of a plugin. The plugin name is the same as its directory name. */
        static set_plugin_enabled(plugin: string, enabled: boolean): void
        
        /** Returns `true` if the specified [param plugin] is enabled. The plugin name is the same as its directory name. */
        static is_plugin_enabled(plugin: string): boolean
        
        /** Returns the editor's [Theme].  
         *      
         *  **Note:** When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the `get_theme_*` methods.  
         */
        static get_editor_theme(): Theme
        
        /** Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.  
         *  **Warning:** Removing and freeing this node will render the editor useless and may cause a crash.  
         */
        static get_base_control(): Control
        
        /** Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement [method EditorPlugin._has_main_screen].  
         *      
         *  **Note:** This node is a [VBoxContainer], which means that if you add a [Control] child to it, you need to set the child's [member Control.size_flags_vertical] to [constant Control.SIZE_EXPAND_FILL] to make it use the full available space.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static get_editor_main_screen(): VBoxContainer
        
        /** Returns the editor's [ScriptEditor] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static get_script_editor(): ScriptEditor
        
        /** Returns the 2D editor [SubViewport]. It does not have a camera. Instead, the view transforms are done directly and can be accessed with [member Viewport.global_canvas_transform]. */
        static get_editor_viewport_2d(): SubViewport
        
        /** Returns the specified 3D editor [SubViewport], from `0` to `3`. The viewport can be used to access the active editor cameras with [method Viewport.get_camera_3d]. */
        static get_editor_viewport_3d(idx: int64 = 0): SubViewport
        
        /** Sets the editor's current main screen to the one specified in [param name]. [param name] must match the title of the tab in question exactly (e.g. `2D`, `3D`, [code skip-lint]Script`, or `AssetLib` for default tabs). */
        static set_main_screen_editor(name: string): void
        
        /** Returns `true` if multiple window support is enabled in the editor. Multiple window support is enabled if  *all*  of these statements are true:  
         *  - [member EditorSettings.interface/multi_window/enable] is `true`.  
         *  - [member EditorSettings.interface/editor/single_window_mode] is `false`.  
         *  - [member Viewport.gui_embed_subwindows] is `false`. This is forced to `true` on platforms that don't support multiple windows such as Web, or when the `--single-window` [url=https://docs.godotengine.org/en/4.3/tutorials/editor/command_line_tutorial.html]command line argument[/url] is used.  
         */
        static is_multi_window_enabled(): boolean
        
        /** Returns the actual scale of the editor UI (`1.0` being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.  
         *      
         *  **Note:** This value is set via the `interface/editor/display_scale` and `interface/editor/custom_display_scale` editor settings. Editor must be restarted for changes to be properly applied.  
         */
        static get_editor_scale(): float64
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popup_dialog(dialog: Window, rect: Rect2i = new Rect2i(0, 0, 0, 0)): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popup_dialog_centered(dialog: Window, minsize: Vector2i = Vector2i.ZERO): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_ratio]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popup_dialog_centered_ratio(dialog: Window, ratio: float64 = 0.8): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_clamped]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popup_dialog_centered_clamped(dialog: Window, minsize: Vector2i = Vector2i.ZERO, fallback_ratio: float64 = 0.75): void
        
        /** Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.  
         *  In order to get a reference to the [EditorFeatureProfile], you must load the feature profile using [method EditorFeatureProfile.load_from_file].  
         *      
         *  **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        static get_current_feature_profile(): string
        
        /** Selects and activates the specified feature profile with the given [param profile_name]. Set [param profile_name] to an empty string to reset to the default feature profile.  
         *  A feature profile can be created programmatically using the [EditorFeatureProfile] class.  
         *      
         *  **Note:** The feature profile that gets activated must be located in the `feature_profiles` directory, as a file with the `.profile` extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        static set_current_feature_profile(profile_name: string): void
        
        /** Pops up an editor dialog for selecting a [Node] from the edited scene. The [param callback] must take a single argument of type [NodePath]. It is called on the selected [NodePath] or the empty path `^""` if the dialog is canceled. If [param valid_types] is provided, the dialog will only show Nodes that match one of the listed Node types.  
         *  **Example:**  
         *    
         */
        static popup_node_selector(callback: Callable, valid_types: GArray = []): void
        
        /** Pops up an editor dialog for selecting properties from [param object]. The [param callback] must take a single argument of type [NodePath]. It is called on the selected property path (see [method NodePath.get_as_property_path]) or the empty path `^""` if the dialog is canceled. If [param type_filter] is provided, the dialog will only show properties that match one of the listed [enum Variant.Type] values.  
         *  **Example:**  
         *    
         */
        static popup_property_selector(object: Object, callback: Callable, type_filter: PackedInt32Array | int32[] = []): void
        
        /** Returns the editor's [FileSystemDock] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static get_file_system_dock(): FileSystemDock
        
        /** Selects the file, with the path provided by [param file], in the FileSystem dock. */
        static select_file(file: string): void
        
        /** Returns an array containing the paths of the currently selected files (and directories) in the [FileSystemDock]. */
        static get_selected_paths(): PackedStringArray
        
        /** Returns the current path being viewed in the [FileSystemDock]. */
        static get_current_path(): string
        
        /** Returns the current directory being viewed in the [FileSystemDock]. If a file is selected, its base directory will be returned using [method String.get_base_dir] instead. */
        static get_current_directory(): string
        
        /** Returns the editor's [EditorInspector] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static get_inspector(): EditorInspector
        
        /** Shows the given property on the given [param object] in the editor's Inspector dock. If [param inspector_only] is `true`, plugins will not attempt to edit [param object]. */
        static inspect_object(object: Object, for_property: string = '', inspector_only: boolean = false): void
        
        /** Edits the given [Resource]. If the resource is a [Script] you can also edit it with [method edit_script] to specify the line and column position. */
        static edit_resource(resource: Resource): void
        
        /** Edits the given [Node]. The node will be also selected if it's inside the scene tree. */
        static edit_node(node: Node): void
        
        /** Edits the given [Script]. The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor. */
        static edit_script(script: Script, line: int64 = -1, column: int64 = 0, grab_focus: boolean = true): void
        
        /** Opens the scene at the given path. */
        static open_scene_from_path(scene_filepath: string): void
        
        /** Reloads the scene at the given path. */
        static reload_scene_from_path(scene_filepath: string): void
        
        /** Returns an [Array] with the file paths of the currently opened scenes. */
        static get_open_scenes(): PackedStringArray
        
        /** Returns the edited (current) scene's root [Node]. */
        static get_edited_scene_root(): Node
        
        /** Saves the currently active scene. Returns either [constant OK] or [constant ERR_CANT_CREATE]. */
        static save_scene(): GError
        
        /** Saves the currently active scene as a file at [param path]. */
        static save_scene_as(path: string, with_preview: boolean = true): void
        
        /** Saves all opened scenes in the editor. */
        static save_all_scenes(): void
        
        /** Marks the current scene tab as unsaved. */
        static mark_scene_as_unsaved(): void
        
        /** Plays the main scene. */
        static play_main_scene(): void
        
        /** Plays the currently active scene. */
        static play_current_scene(): void
        
        /** Plays the scene specified by its filepath. */
        static play_custom_scene(scene_filepath: string): void
        
        /** Stops the scene that is currently playing. */
        static stop_playing_scene(): void
        
        /** Returns `true` if a scene is currently being played, `false` otherwise. Paused scenes are considered as being played. */
        static is_playing_scene(): boolean
        
        /** Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string. */
        static get_playing_scene(): string
        
        /** If `true`, enables distraction-free mode which hides side docks to increase the space available for the main view. */
        get distraction_free_mode(): boolean
        set distraction_free_mode(value: boolean)
        
        /** If `true`, the Movie Maker mode is enabled in the editor. See [MovieWriter] for more information. */
        get movie_maker_enabled(): boolean
        set movie_maker_enabled(value: boolean)
    }
    // _singleton_class_: JavaClassWrapper
    /** Provides access to the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_javaclasswrapper.html  
     */
    class JavaClassWrapper extends Object {
        /** Wraps a class defined in Java, and returns it as a [JavaClass] [Object] type that Godot can interact with.  
         *      
         *  **Note:** This method only works on Android. On every other platform, this method does nothing and returns an empty [JavaClass].  
         */
        static wrap(name: string): JavaClass
    }
    // _singleton_class_: JavaScriptBridge
    /** Singleton that connects the engine with the browser's JavaScript context in Web export.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_javascriptbridge.html  
     */
    class JavaScriptBridge extends Object {
        /** Execute the string [param code] as JavaScript code within the browser window. This is a call to the actual global JavaScript function [code skip-lint]eval()`.  
         *  If [param use_global_execution_context] is `true`, the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.  
         */
        static eval(code: string, use_global_execution_context: boolean = false): any
        
        /** Returns an interface to a JavaScript object that can be used by scripts. The [param interface] must be a valid property of the JavaScript `window`. The callback must accept a single [Array] argument, which will contain the JavaScript `arguments`. See [JavaScriptObject] for usage. */
        static get_interface(interface: string): JavaScriptObject
        
        /** Creates a reference to a [Callable] that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See [JavaScriptObject] for usage. */
        static create_callback(callable: Callable): JavaScriptObject
        
        /** Creates a new JavaScript object using the `new` constructor. The [param object] must a valid property of the JavaScript `window`. See [JavaScriptObject] for usage. */
        static create_object(object: string, ...vargargs: any[]): any
        
        /** Prompts the user to download a file containing the specified [param buffer]. The file will have the given [param name] and [param mime] type.  
         *      
         *  **Note:** The browser may override the [url=https://en.wikipedia.org/wiki/Media_type]MIME type[/url] provided based on the file [param name]'s extension.  
         *      
         *  **Note:** Browsers might block the download if [method download_buffer] is not being called from a user interaction (e.g. button click).  
         *      
         *  **Note:** Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.  
         */
        static download_buffer(buffer: PackedByteArray | byte[] | ArrayBuffer, name: string, mime: string = 'application/octet-stream'): void
        
        /** Returns `true` if a new version of the progressive web app is waiting to be activated.  
         *      
         *  **Note:** Only relevant when exported as a Progressive Web App.  
         */
        static pwa_needs_update(): boolean
        
        /** Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.  
         *      
         *  **Note:** Your application will be **reloaded in all browser tabs**.  
         *      
         *  **Note:** Only relevant when exported as a Progressive Web App and [method pwa_needs_update] returns `true`.  
         */
        static pwa_update(): GError
        
        /** Force synchronization of the persistent file system (when enabled).  
         *      
         *  **Note:** This is only useful for modules or extensions that can't use [FileAccess] to write files.  
         */
        static force_fs_sync(): void
        
        /** Emitted when an update for this progressive web app has been detected but is waiting to be activated because a previous version is active. See [method pwa_update] to force the update to take place immediately. */
        static readonly pwa_update_available: Signal0
    }
    // _singleton_class_: AudioServer
    namespace AudioServer {
        enum SpeakerMode {
            /** Two or fewer speakers were detected. */
            SPEAKER_MODE_STEREO = 0,
            
            /** A 3.1 channel surround setup was detected. */
            SPEAKER_SURROUND_31 = 1,
            
            /** A 5.1 channel surround setup was detected. */
            SPEAKER_SURROUND_51 = 2,
            
            /** A 7.1 channel surround setup was detected. */
            SPEAKER_SURROUND_71 = 3,
        }
        enum PlaybackType {
            /** The playback will be considered of the type declared at [member ProjectSettings.audio/general/default_playback_type]. */
            PLAYBACK_TYPE_DEFAULT = 0,
            
            /** Force the playback to be considered as a stream. */
            PLAYBACK_TYPE_STREAM = 1,
            
            /** Force the playback to be considered as a sample. This can provide lower latency and more stable playback (with less risk of audio crackling), at the cost of having less flexibility.  
             *      
             *  **Note:** Only currently supported on the web platform.  
             *      
             *  **Note:** [AudioEffect]s are not supported when playback is considered as a sample.  
             */
            PLAYBACK_TYPE_SAMPLE = 2,
            
            /** Represents the size of the [enum PlaybackType] enum. */
            PLAYBACK_TYPE_MAX = 3,
        }
    }
    /** Server interface for low-level audio access.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_audioserver.html  
     */
    class AudioServer extends Object {
        /** Removes the bus at index [param index]. */
        static remove_bus(index: int64): void
        
        /** Adds a bus at [param at_position]. */
        static add_bus(at_position: int64 = -1): void
        
        /** Moves the bus from index [param index] to index [param to_index]. */
        static move_bus(index: int64, to_index: int64): void
        
        /** Sets the name of the bus at index [param bus_idx] to [param name]. */
        static set_bus_name(bus_idx: int64, name: string): void
        
        /** Returns the name of the bus with the index [param bus_idx]. */
        static get_bus_name(bus_idx: int64): string
        
        /** Returns the index of the bus with the name [param bus_name]. Returns `-1` if no bus with the specified name exist. */
        static get_bus_index(bus_name: StringName): int64
        
        /** Returns the number of channels of the bus at index [param bus_idx]. */
        static get_bus_channels(bus_idx: int64): int64
        
        /** Sets the volume of the bus at index [param bus_idx] to [param volume_db]. */
        static set_bus_volume_db(bus_idx: int64, volume_db: float64): void
        
        /** Returns the volume of the bus at index [param bus_idx] in dB. */
        static get_bus_volume_db(bus_idx: int64): float64
        
        /** Connects the output of the bus at [param bus_idx] to the bus named [param send]. */
        static set_bus_send(bus_idx: int64, send: StringName): void
        
        /** Returns the name of the bus that the bus at index [param bus_idx] sends to. */
        static get_bus_send(bus_idx: int64): StringName
        
        /** If `true`, the bus at index [param bus_idx] is in solo mode. */
        static set_bus_solo(bus_idx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is in solo mode. */
        static is_bus_solo(bus_idx: int64): boolean
        
        /** If `true`, the bus at index [param bus_idx] is muted. */
        static set_bus_mute(bus_idx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is muted. */
        static is_bus_mute(bus_idx: int64): boolean
        
        /** If `true`, the bus at index [param bus_idx] is bypassing effects. */
        static set_bus_bypass_effects(bus_idx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is bypassing effects. */
        static is_bus_bypassing_effects(bus_idx: int64): boolean
        
        /** Adds an [AudioEffect] effect to the bus [param bus_idx] at [param at_position]. */
        static add_bus_effect(bus_idx: int64, effect: AudioEffect, at_position: int64 = -1): void
        
        /** Removes the effect at index [param effect_idx] from the bus at index [param bus_idx]. */
        static remove_bus_effect(bus_idx: int64, effect_idx: int64): void
        
        /** Returns the number of effects on the bus at [param bus_idx]. */
        static get_bus_effect_count(bus_idx: int64): int64
        
        /** Returns the [AudioEffect] at position [param effect_idx] in bus [param bus_idx]. */
        static get_bus_effect(bus_idx: int64, effect_idx: int64): AudioEffect
        
        /** Returns the [AudioEffectInstance] assigned to the given bus and effect indices (and optionally channel). */
        static get_bus_effect_instance(bus_idx: int64, effect_idx: int64, channel: int64 = 0): AudioEffectInstance
        
        /** Swaps the position of two effects in bus [param bus_idx]. */
        static swap_bus_effects(bus_idx: int64, effect_idx: int64, by_effect_idx: int64): void
        
        /** If `true`, the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static set_bus_effect_enabled(bus_idx: int64, effect_idx: int64, enabled: boolean): void
        
        /** If `true`, the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static is_bus_effect_enabled(bus_idx: int64, effect_idx: int64): boolean
        
        /** Returns the peak volume of the left speaker at bus index [param bus_idx] and channel index [param channel]. */
        static get_bus_peak_volume_left_db(bus_idx: int64, channel: int64): float64
        
        /** Returns the peak volume of the right speaker at bus index [param bus_idx] and channel index [param channel]. */
        static get_bus_peak_volume_right_db(bus_idx: int64, channel: int64): float64
        
        /** Locks the audio driver's main loop.  
         *      
         *  **Note:** Remember to unlock it afterwards.  
         */
        static lock(): void
        
        /** Unlocks the audio driver's main loop. (After locking it, you should always unlock it.) */
        static unlock(): void
        
        /** Returns the speaker configuration. */
        static get_speaker_mode(): AudioServer.SpeakerMode
        
        /** Returns the sample rate at the output of the [AudioServer]. */
        static get_mix_rate(): float64
        
        /** Returns the names of all audio output devices detected on the system. */
        static get_output_device_list(): PackedStringArray
        
        /** Returns the relative time until the next mix occurs. */
        static get_time_to_next_mix(): float64
        
        /** Returns the relative time since the last mix occurred. */
        static get_time_since_last_mix(): float64
        
        /** Returns the audio driver's effective output latency. This is based on [member ProjectSettings.audio/driver/output_latency], but the exact returned value will differ depending on the operating system and audio driver.  
         *      
         *  **Note:** This can be expensive; it is not recommended to call [method get_output_latency] every frame.  
         */
        static get_output_latency(): float64
        
        /** Returns the names of all audio input devices detected on the system.  
         *      
         *  **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.  
         */
        static get_input_device_list(): PackedStringArray
        
        /** Overwrites the currently used [AudioBusLayout]. */
        static set_bus_layout(bus_layout: AudioBusLayout): void
        
        /** Generates an [AudioBusLayout] using the available buses and effects. */
        static generate_bus_layout(): AudioBusLayout
        
        /** If set to `true`, all instances of [AudioStreamPlayback] will call [method AudioStreamPlayback._tag_used_streams] every mix step.  
         *      
         *  **Note:** This is enabled by default in the editor, as it is used by editor plugins for the audio stream previews.  
         */
        static set_enable_tagging_used_audio_streams(enable: boolean): void
        
        /** If `true`, the stream is registered as a sample. The engine will not have to register it before playing the sample.  
         *  If `false`, the stream will have to be registered before playing it. To prevent lag spikes, register the stream as sample with [method register_stream_as_sample].  
         */
        static is_stream_registered_as_sample(stream: AudioStream): boolean
        
        /** Forces the registration of a stream as a sample.  
         *      
         *  **Note:** Lag spikes may occur when calling this method, especially on single-threaded builds. It is suggested to call this method while loading assets, where the lag spike could be masked, instead of registering the sample right before it needs to be played.  
         */
        static register_stream_as_sample(stream: AudioStream): void
        
        /** Number of available audio buses. */
        get bus_count(): int64
        set bus_count(value: int64)
        
        /** Name of the current device for audio output (see [method get_output_device_list]). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value `"Default"` will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to `"Default"`. */
        get output_device(): string
        set output_device(value: string)
        
        /** Name of the current device for audio input (see [method get_input_device_list]). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value `"Default"` will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to `"Default"`.  
         *      
         *  **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.  
         */
        get input_device(): string
        set input_device(value: string)
        
        /** Scales the rate at which audio is played (i.e. setting it to `0.5` will make the audio be played at half its speed). See also [member Engine.time_scale] to affect the general simulation speed, which is independent from [member AudioServer.playback_speed_scale]. */
        get playback_speed_scale(): float64
        set playback_speed_scale(value: float64)
        
        /** Emitted when an audio bus is added, deleted, or moved. */
        static readonly bus_layout_changed: Signal0
        
        /** Emitted when the audio bus at [param bus_index] is renamed from [param old_name] to [param new_name]. */
        static readonly bus_renamed: Signal3<int64, StringName, StringName>
    }
    // _singleton_class_: CameraServer
    namespace CameraServer {
        enum FeedImage {
            /** The RGBA camera image. */
            FEED_RGBA_IMAGE = 0,
            
            /** The [url=https://en.wikipedia.org/wiki/YCbCr]YCbCr[/url] camera image. */
            FEED_YCBCR_IMAGE = 0,
            
            /** The Y component camera image. */
            FEED_Y_IMAGE = 0,
            
            /** The CbCr component camera image. */
            FEED_CBCR_IMAGE = 1,
        }
    }
    /** Server keeping track of different cameras accessible in Godot.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_cameraserver.html  
     */
    class CameraServer extends Object {
        /** Returns the [CameraFeed] corresponding to the camera with the given [param index]. */
        static get_feed(index: int64): CameraFeed
        
        /** Returns the number of [CameraFeed]s registered. */
        static get_feed_count(): int64
        
        /** Returns an array of [CameraFeed]s. */
        static feeds(): GArray
        
        /** Adds the camera [param feed] to the camera server. */
        static add_feed(feed: CameraFeed): void
        
        /** Removes the specified camera [param feed]. */
        static remove_feed(feed: CameraFeed): void
        
        /** Emitted when a [CameraFeed] is added (e.g. a webcam is plugged in). */
        static readonly camera_feed_added: Signal1<int64>
        
        /** Emitted when a [CameraFeed] is removed (e.g. a webcam is unplugged). */
        static readonly camera_feed_removed: Signal1<int64>
    }
    // _singleton_class_: DisplayServer
    namespace DisplayServer {
        enum Feature {
            /** Display server supports multiple windows that can be moved outside of the main window. **Windows, macOS, Linux (X11)** */
            FEATURE_SUBWINDOWS = 0,
            
            /** Display server supports touchscreen input. **Windows, Linux (X11), Android, iOS, Web** */
            FEATURE_TOUCHSCREEN = 1,
            
            /** Display server supports mouse input. **Windows, macOS, Linux (X11/Wayland), Android, Web** */
            FEATURE_MOUSE = 2,
            
            /** Display server supports warping mouse coordinates to keep the mouse cursor constrained within an area, but looping when one of the edges is reached. **Windows, macOS, Linux (X11/Wayland)** */
            FEATURE_MOUSE_WARP = 3,
            
            /** Display server supports setting and getting clipboard data. See also [constant FEATURE_CLIPBOARD_PRIMARY]. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web** */
            FEATURE_CLIPBOARD = 4,
            
            /** Display server supports popping up a virtual keyboard when requested to input text without a physical keyboard. **Android, iOS, Web** */
            FEATURE_VIRTUAL_KEYBOARD = 5,
            
            /** Display server supports setting the mouse cursor shape to be different from the default. **Windows, macOS, Linux (X11/Wayland), Android, Web** */
            FEATURE_CURSOR_SHAPE = 6,
            
            /** Display server supports setting the mouse cursor shape to a custom image. **Windows, macOS, Linux (X11/Wayland), Web** */
            FEATURE_CUSTOM_CURSOR_SHAPE = 7,
            
            /** Display server supports spawning text dialogs using the operating system's native look-and-feel. See [method dialog_show]. **Windows, macOS** */
            FEATURE_NATIVE_DIALOG = 8,
            
            /** Display server supports [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url], which is commonly used for inputting Chinese/Japanese/Korean text. This is handled by the operating system, rather than by Godot. **Windows, macOS, Linux (X11)** */
            FEATURE_IME = 9,
            
            /** Display server supports windows can use per-pixel transparency to make windows behind them partially or fully visible. **Windows, macOS, Linux (X11/Wayland)** */
            FEATURE_WINDOW_TRANSPARENCY = 10,
            
            /** Display server supports querying the operating system's display scale factor. This allows for  *reliable*  automatic hiDPI display detection, as opposed to guessing based on the screen resolution and reported display DPI (which can be unreliable due to broken monitor EDID). **Windows, Linux (Wayland), macOS** */
            FEATURE_HIDPI = 11,
            
            /** Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS, Linux (X11)** */
            FEATURE_ICON = 12,
            
            /** Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS** */
            FEATURE_NATIVE_ICON = 13,
            
            /** Display server supports changing the screen orientation. **Android, iOS** */
            FEATURE_ORIENTATION = 14,
            
            /** Display server supports V-Sync status can be changed from the default (which is forced to be enabled platforms not supporting this feature). **Windows, macOS, Linux (X11/Wayland)** */
            FEATURE_SWAP_BUFFERS = 15,
            
            /** Display server supports Primary clipboard can be used. This is a different clipboard from [constant FEATURE_CLIPBOARD]. **Linux (X11/Wayland)** */
            FEATURE_CLIPBOARD_PRIMARY = 17,
            
            /** Display server supports text-to-speech. See `tts_*` methods. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web** */
            FEATURE_TEXT_TO_SPEECH = 18,
            
            /** Display server supports expanding window content to the title. See [constant WINDOW_FLAG_EXTEND_TO_TITLE]. **macOS** */
            FEATURE_EXTEND_TO_TITLE = 19,
            
            /** Display server supports reading screen pixels. See [method screen_get_pixel]. */
            FEATURE_SCREEN_CAPTURE = 20,
            
            /** Display server supports application status indicators. */
            FEATURE_STATUS_INDICATOR = 21,
            
            /** Display server supports native help system search callbacks. See [method help_set_search_callbacks]. */
            FEATURE_NATIVE_HELP = 22,
            
            /** Display server supports spawning text input dialogs using the operating system's native look-and-feel. See [method dialog_input_text]. **Windows, macOS** */
            FEATURE_NATIVE_DIALOG_INPUT = 23,
            
            /** Display server supports spawning dialogs for selecting files or directories using the operating system's native look-and-feel. See [method file_dialog_show] and [method file_dialog_with_options_show]. **Windows, macOS, Linux (X11/Wayland)** */
            FEATURE_NATIVE_DIALOG_FILE = 24,
        }
        enum MouseMode {
            /** Makes the mouse cursor visible if it is hidden. */
            MOUSE_MODE_VISIBLE = 0,
            
            /** Makes the mouse cursor hidden if it is visible. */
            MOUSE_MODE_HIDDEN = 1,
            
            /** Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.  
             *      
             *  **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].  
             */
            MOUSE_MODE_CAPTURED = 2,
            
            /** Confines the mouse cursor to the game window, and make it visible. */
            MOUSE_MODE_CONFINED = 3,
            
            /** Confines the mouse cursor to the game window, and make it hidden. */
            MOUSE_MODE_CONFINED_HIDDEN = 4,
        }
        enum ScreenOrientation {
            /** Default landscape orientation. */
            SCREEN_LANDSCAPE = 0,
            
            /** Default portrait orientation. */
            SCREEN_PORTRAIT = 1,
            
            /** Reverse landscape orientation (upside down). */
            SCREEN_REVERSE_LANDSCAPE = 2,
            
            /** Reverse portrait orientation (upside down). */
            SCREEN_REVERSE_PORTRAIT = 3,
            
            /** Automatic landscape orientation (default or reverse depending on sensor). */
            SCREEN_SENSOR_LANDSCAPE = 4,
            
            /** Automatic portrait orientation (default or reverse depending on sensor). */
            SCREEN_SENSOR_PORTRAIT = 5,
            
            /** Automatic landscape or portrait orientation (default or reverse depending on sensor). */
            SCREEN_SENSOR = 6,
        }
        enum VirtualKeyboardType {
            /** Default text virtual keyboard. */
            KEYBOARD_TYPE_DEFAULT = 0,
            
            /** Multiline virtual keyboard. */
            KEYBOARD_TYPE_MULTILINE = 1,
            
            /** Virtual number keypad, useful for PIN entry. */
            KEYBOARD_TYPE_NUMBER = 2,
            
            /** Virtual number keypad, useful for entering fractional numbers. */
            KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
            
            /** Virtual phone number keypad. */
            KEYBOARD_TYPE_PHONE = 4,
            
            /** Virtual keyboard with additional keys to assist with typing email addresses. */
            KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
            
            /** Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.  
             *      
             *  **Note:** This is not supported on Web. Instead, this behaves identically to [constant KEYBOARD_TYPE_DEFAULT].  
             */
            KEYBOARD_TYPE_PASSWORD = 6,
            
            /** Virtual keyboard with additional keys to assist with typing URLs. */
            KEYBOARD_TYPE_URL = 7,
        }
        enum CursorShape {
            /** Arrow cursor shape. This is the default when not pointing anything that overrides the mouse cursor, such as a [LineEdit] or [TextEdit]. */
            CURSOR_ARROW = 0,
            
            /** I-beam cursor shape. This is used by default when hovering a control that accepts text input, such as [LineEdit] or [TextEdit]. */
            CURSOR_IBEAM = 1,
            
            /** Pointing hand cursor shape. This is used by default when hovering a [LinkButton] or a URL tag in a [RichTextLabel]. */
            CURSOR_POINTING_HAND = 2,
            
            /** Crosshair cursor. This is intended to be displayed when the user needs precise aim over an element, such as a rectangle selection tool or a color picker. */
            CURSOR_CROSS = 3,
            
            /** Wait cursor. On most cursor themes, this displays a spinning icon  *besides*  the arrow. Intended to be used for non-blocking operations (when the user can do something else at the moment). See also [constant CURSOR_BUSY]. */
            CURSOR_WAIT = 4,
            
            /** Wait cursor. On most cursor themes, this  *replaces*  the arrow with a spinning icon. Intended to be used for blocking operations (when the user can't do anything else at the moment). See also [constant CURSOR_WAIT]. */
            CURSOR_BUSY = 5,
            
            /** Dragging hand cursor. This is displayed during drag-and-drop operations. See also [constant CURSOR_CAN_DROP]. */
            CURSOR_DRAG = 6,
            
            /** "Can drop" cursor. This is displayed during drag-and-drop operations if hovering over a [Control] that can accept the drag-and-drop event. On most cursor themes, this displays a dragging hand with an arrow symbol besides it. See also [constant CURSOR_DRAG]. */
            CURSOR_CAN_DROP = 7,
            
            /** Forbidden cursor. This is displayed during drag-and-drop operations if the hovered [Control] can't accept the drag-and-drop event. */
            CURSOR_FORBIDDEN = 8,
            
            /** Vertical resize cursor. Intended to be displayed when the hovered [Control] can be vertically resized using the mouse. See also [constant CURSOR_VSPLIT]. */
            CURSOR_VSIZE = 9,
            
            /** Horizontal resize cursor. Intended to be displayed when the hovered [Control] can be horizontally resized using the mouse. See also [constant CURSOR_HSPLIT]. */
            CURSOR_HSIZE = 10,
            
            /** Secondary diagonal resize cursor (top-right/bottom-left). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse. */
            CURSOR_BDIAGSIZE = 11,
            
            /** Main diagonal resize cursor (top-left/bottom-right). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse. */
            CURSOR_FDIAGSIZE = 12,
            
            /** Move cursor. Intended to be displayed when the hovered [Control] can be moved using the mouse. */
            CURSOR_MOVE = 13,
            
            /** Vertical split cursor. This is displayed when hovering a [Control] with splits that can be vertically resized using the mouse, such as [VSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_VSIZE]. */
            CURSOR_VSPLIT = 14,
            
            /** Horizontal split cursor. This is displayed when hovering a [Control] with splits that can be horizontally resized using the mouse, such as [HSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_HSIZE]. */
            CURSOR_HSPLIT = 15,
            
            /** Help cursor. On most cursor themes, this displays a question mark icon instead of the mouse cursor. Intended to be used when the user has requested help on the next element that will be clicked. */
            CURSOR_HELP = 16,
            
            /** Represents the size of the [enum CursorShape] enum. */
            CURSOR_MAX = 17,
        }
        enum FileDialogMode {
            /** The native file dialog allows selecting one, and only one file. */
            FILE_DIALOG_MODE_OPEN_FILE = 0,
            
            /** The native file dialog allows selecting multiple files. */
            FILE_DIALOG_MODE_OPEN_FILES = 1,
            
            /** The native file dialog only allows selecting a directory, disallowing the selection of any file. */
            FILE_DIALOG_MODE_OPEN_DIR = 2,
            
            /** The native file dialog allows selecting one file or directory. */
            FILE_DIALOG_MODE_OPEN_ANY = 3,
            
            /** The native file dialog will warn when a file exists. */
            FILE_DIALOG_MODE_SAVE_FILE = 4,
        }
        enum WindowMode {
            /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
            WINDOW_MODE_WINDOWED = 0,
            
            /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
            WINDOW_MODE_MINIMIZED = 1,
            
            /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
            WINDOW_MODE_MAXIMIZED = 2,
            
            /** Full screen mode with full multi-window support.  
             *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
             *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
             *  **On macOS:** A new desktop is used to display the running project.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/4.3/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            WINDOW_MODE_FULLSCREEN = 3,
            
            /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
             *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
             *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
             *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
             *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/4.3/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            WINDOW_MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum WindowFlags {
            /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [method window_set_size]. This flag is ignored for full screen windows. */
            WINDOW_FLAG_RESIZE_DISABLED = 0,
            
            /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. */
            WINDOW_FLAG_BORDERLESS = 1,
            
            /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. */
            WINDOW_FLAG_ALWAYS_ON_TOP = 2,
            
            /** The window background can be transparent.  
             *      
             *  **Note:** This flag has no effect if [method is_window_transparency_available] returns `false`.  
             *      
             *  **Note:** Transparency support is implemented on Linux (X11/Wayland), macOS, and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.  
             */
            WINDOW_FLAG_TRANSPARENT = 3,
            
            /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. */
            WINDOW_FLAG_NO_FOCUS = 4,
            
            /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [method window_set_transient]). */
            WINDOW_FLAG_POPUP = 5,
            
            /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons.  
             *  Use [method window_set_window_buttons_offset] to adjust minimize/maximize/close buttons offset.  
             *  Use [method window_get_safe_title_margins] to determine area under the title bar that is not covered by decorations.  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             */
            WINDOW_FLAG_EXTEND_TO_TITLE = 6,
            
            /** All mouse events are passed to the underlying window of the same application. */
            WINDOW_FLAG_MOUSE_PASSTHROUGH = 7,
            
            /** Max value of the [enum WindowFlags]. */
            WINDOW_FLAG_MAX = 8,
        }
        enum WindowEvent {
            /** Sent when the mouse pointer enters the window. */
            WINDOW_EVENT_MOUSE_ENTER = 0,
            
            /** Sent when the mouse pointer exits the window. */
            WINDOW_EVENT_MOUSE_EXIT = 1,
            
            /** Sent when the window grabs focus. */
            WINDOW_EVENT_FOCUS_IN = 2,
            
            /** Sent when the window loses focus. */
            WINDOW_EVENT_FOCUS_OUT = 3,
            
            /** Sent when the user has attempted to close the window (e.g. close button is pressed). */
            WINDOW_EVENT_CLOSE_REQUEST = 4,
            
            /** Sent when the device "Back" button is pressed.  
             *      
             *  **Note:** This event is implemented only on Android.  
             */
            WINDOW_EVENT_GO_BACK_REQUEST = 5,
            
            /** Sent when the window is moved to the display with different DPI, or display DPI is changed.  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             */
            WINDOW_EVENT_DPI_CHANGE = 6,
            
            /** Sent when the window title bar decoration is changed (e.g. [constant WINDOW_FLAG_EXTEND_TO_TITLE] is set or window entered/exited full screen mode).  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             */
            WINDOW_EVENT_TITLEBAR_CHANGE = 7,
        }
        enum VSyncMode {
            /** No vertical synchronization, which means the engine will display frames as fast as possible (tearing may be visible). Framerate is unlimited (regardless of [member Engine.max_fps]). */
            VSYNC_DISABLED = 0,
            
            /** Default vertical synchronization mode, the image is displayed only on vertical blanking intervals (no tearing is visible). Framerate is limited by the monitor refresh rate (regardless of [member Engine.max_fps]). */
            VSYNC_ENABLED = 1,
            
            /** Behaves like [constant VSYNC_DISABLED] when the framerate drops below the screen's refresh rate to reduce stuttering (tearing may be visible). Otherwise, vertical synchronization is enabled to avoid tearing. Framerate is limited by the monitor refresh rate (regardless of [member Engine.max_fps]). Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method. */
            VSYNC_ADAPTIVE = 2,
            
            /** Displays the most recent image in the queue on vertical blanking intervals, while rendering to the other images (no tearing is visible). Framerate is unlimited (regardless of [member Engine.max_fps]).  
             *  Although not guaranteed, the images can be rendered as fast as possible, which may reduce input lag (also called "Fast" V-Sync mode). [constant VSYNC_MAILBOX] works best when at least twice as many frames as the display refresh rate are rendered. Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method.  
             */
            VSYNC_MAILBOX = 3,
        }
        enum HandleType {
            /** Display handle:  
             *  - Linux (X11): `X11::Display*` for the display.  
             *  - Android: `EGLDisplay` for the display.  
             */
            DISPLAY_HANDLE = 0,
            
            /** Window handle:  
             *  - Windows: `HWND` for the window.  
             *  - Linux (X11): `X11::Window*` for the window.  
             *  - macOS: `NSWindow*` for the window.  
             *  - iOS: `UIViewController*` for the view controller.  
             *  - Android: `jObject` for the activity.  
             */
            WINDOW_HANDLE = 1,
            
            /** Window view:  
             *  - Windows: `HDC` for the window (only with the GL Compatibility renderer).  
             *  - macOS: `NSView*` for the window main view.  
             *  - iOS: `UIView*` for the window main view.  
             */
            WINDOW_VIEW = 2,
            
            /** OpenGL context (only with the GL Compatibility renderer):  
             *  - Windows: `HGLRC` for the window (native GL), or `EGLContext` for the window (ANGLE).  
             *  - Linux (X11): `GLXContext*` for the window.  
             *  - macOS: `NSOpenGLContext*` for the window (native GL), or `EGLContext` for the window (ANGLE).  
             *  - Android: `EGLContext` for the window.  
             */
            OPENGL_CONTEXT = 3,
        }
        enum TTSUtteranceEvent {
            /** Utterance has begun to be spoken. */
            TTS_UTTERANCE_STARTED = 0,
            
            /** Utterance was successfully finished. */
            TTS_UTTERANCE_ENDED = 1,
            
            /** Utterance was canceled, or TTS service was unable to process it. */
            TTS_UTTERANCE_CANCELED = 2,
            
            /** Utterance reached a word or sentence boundary. */
            TTS_UTTERANCE_BOUNDARY = 3,
        }
    }
    /** A server interface for low-level window management.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_displayserver.html  
     */
    class DisplayServer extends Object {
        /** Represents the screen containing the mouse pointer.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_WITH_MOUSE_FOCUS = -4
        
        /** Represents the screen containing the window with the keyboard focus.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_WITH_KEYBOARD_FOCUS = -3
        
        /** Represents the primary screen.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_PRIMARY = -2
        
        /** Represents the screen where the main window is located. This is usually the default value in functions that allow specifying one of several screens.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_OF_MAIN_WINDOW = -1
        
        /** The ID of the main window spawned by the engine, which can be passed to methods expecting a `window_id`. */
        static readonly MAIN_WINDOW_ID = 0
        
        /** The ID that refers to a nonexistent window. This is returned by some [DisplayServer] methods if no window matches the requested result. */
        static readonly INVALID_WINDOW_ID = -1
        
        /** The ID that refers to a nonexistent application status indicator. */
        static readonly INVALID_INDICATOR_ID = -1
        
        /** Returns `true` if the specified [param feature] is supported by the current [DisplayServer], `false` otherwise. */
        static has_feature(feature: DisplayServer.Feature): boolean
        
        /** Returns the name of the [DisplayServer] currently in use. Most operating systems only have a single [DisplayServer], but Linux has access to more than one [DisplayServer] (currently X11 and Wayland).  
         *  The names of built-in display servers are `Windows`, `macOS`, `X11` (Linux), `Wayland` (Linux), `Android`, `iOS`, `web` (HTML5), and `headless` (when started with the `--headless` [url=https://docs.godotengine.org/en/4.3/tutorials/editor/command_line_tutorial.html]command line argument[/url]).  
         */
        static get_name(): string
        
        /** Sets native help system search callbacks.  
         *  [param search_callback] has the following arguments: `String search_string, int result_limit` and return a [Dictionary] with "key, display name" pairs for the search results. Called when the user enters search terms in the `Help` menu.  
         *  [param action_callback] has the following arguments: `String key`. Called when the user selects a search result in the `Help` menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static help_set_search_callbacks(search_callback: Callable, action_callback: Callable): void
        
        /** Returns `true` if the synthesizer is generating speech, or have utterance waiting in the queue.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_is_speaking(): boolean
        
        /** Returns `true` if the synthesizer is in a paused state.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_is_paused(): boolean
        
        /** Returns an [Array] of voice information dictionaries.  
         *  Each [Dictionary] contains two [String] entries:  
         *  - `name` is voice name.  
         *  - `id` is voice identifier.  
         *  - `language` is language code in `lang_Variant` format. The `lang` part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The [code skip-lint]Variant` part is an engine-dependent string describing country, region or/and dialect.  
         *  Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_get_voices(): GArray
        
        /** Returns an [PackedStringArray] of voice identifiers for the [param language].  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_get_voices_for_language(language: string): PackedStringArray
        
        /** Adds an utterance to the queue. If [param interrupt] is `true`, the queue is cleared first.  
         *  - [param voice] identifier is one of the `"id"` values returned by [method tts_get_voices] or one of the values returned by [method tts_get_voices_for_language].  
         *  - [param volume] ranges from `0` (lowest) to `100` (highest).  
         *  - [param pitch] ranges from `0.0` (lowest) to `2.0` (highest), `1.0` is default pitch for the current voice.  
         *  - [param rate] ranges from `0.1` (lowest) to `10.0` (highest), `1.0` is a normal speaking rate. Other values act as a percentage relative.  
         *  - [param utterance_id] is passed as a parameter to the callback functions.  
         *      
         *  **Note:** On Windows and Linux (X11/Wayland), utterance [param text] can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling [method tts_speak].  
         *      
         *  **Note:** The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_speak(text: string, voice: string, volume: int64 = 50, pitch: float64 = 1, rate: float64 = 1, utterance_id: int64 = 0, interrupt: boolean = false): void
        
        /** Puts the synthesizer into a paused state.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_pause(): void
        
        /** Resumes the synthesizer if it was paused.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_resume(): void
        
        /** Stops synthesis in progress and removes all utterances from the queue.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Linux), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_stop(): void
        
        /** Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.  
         *  - [constant TTS_UTTERANCE_STARTED], [constant TTS_UTTERANCE_ENDED], and [constant TTS_UTTERANCE_CANCELED] callable's method should take one [int] parameter, the utterance ID.  
         *  - [constant TTS_UTTERANCE_BOUNDARY] callable's method should take two [int] parameters, the index of the character and the utterance ID.  
         *      
         *  **Note:** The granularity of the boundary callbacks is engine dependent.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         *      
         *  **Note:** [member ProjectSettings.audio/general/text_to_speech] should be `true` to use text-to-speech.  
         */
        static tts_set_utterance_callback(event: DisplayServer.TTSUtteranceEvent, callable: Callable): void
        static _tts_post_utterance_event(event: DisplayServer.TTSUtteranceEvent, id: int64, char_pos: int64): void
        
        /** Returns `true` if OS supports dark mode.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static is_dark_mode_supported(): boolean
        
        /** Returns `true` if OS is using dark mode.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static is_dark_mode(): boolean
        
        /** Returns OS theme accent color. Returns `Color(0, 0, 0, 0)`, if accent color is unknown.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_accent_color(): Color
        
        /** Returns the OS theme base color (default control background). Returns `Color(0, 0, 0, 0)` if the base color is unknown.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_base_color(): Color
        
        /** Sets the [param callable] that should be called when system theme settings are changed. Callback method should have zero arguments.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static set_system_theme_change_callback(callable: Callable): void
        
        /** Sets the current mouse mode. See also [method mouse_get_mode]. */
        static mouse_set_mode(mouse_mode: DisplayServer.MouseMode): void
        
        /** Returns the current mouse mode. See also [method mouse_set_mode]. */
        static mouse_get_mode(): DisplayServer.MouseMode
        
        /** Sets the mouse cursor position to the given [param position] relative to an origin at the upper left corner of the currently focused game Window Manager window.  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS, and Linux (X11/Wayland). It has no effect on Android, iOS, and Web.  
         */
        static warp_mouse(position: Vector2i): void
        
        /** Returns the mouse cursor's current position in screen coordinates. */
        static mouse_get_position(): Vector2i
        
        /** Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method Input.get_mouse_button_mask]. */
        static mouse_get_button_state(): MouseButtonMask
        
        /** Sets the user's clipboard content to the given string. */
        static clipboard_set(clipboard: string): void
        
        /** Returns the user's clipboard as a string if possible. */
        static clipboard_get(): string
        
        /** Returns the user's clipboard as an image if possible.  
         *      
         *  **Note:** This method uses the copied pixel data, e.g. from a image editing software or a web browser, not an image file copied from file explorer.  
         */
        static clipboard_get_image(): Image
        
        /** Returns `true` if there is a text content on the user's clipboard. */
        static clipboard_has(): boolean
        
        /** Returns `true` if there is an image content on the user's clipboard. */
        static clipboard_has_image(): boolean
        
        /** Sets the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.  
         *      
         *  **Note:** This method is only implemented on Linux (X11/Wayland).  
         */
        static clipboard_set_primary(clipboard_primary: string): void
        
        /** Returns the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.  
         *      
         *  **Note:** This method is only implemented on Linux (X11/Wayland).  
         */
        static clipboard_get_primary(): string
        
        /** Returns an [Array] of [Rect2], each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also [method get_display_safe_area].  
         *      
         *  **Note:** Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.  
         */
        static get_display_cutouts(): GArray
        
        /** Returns the unobscured area of the display where interactive controls should be rendered. See also [method get_display_cutouts]. */
        static get_display_safe_area(): Rect2i
        
        /** Returns the number of displays available. */
        static get_screen_count(): int64
        
        /** Returns index of the primary screen. */
        static get_primary_screen(): int64
        
        /** Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window. */
        static get_keyboard_focus_screen(): int64
        
        /** Returns index of the screen which contains specified rectangle. */
        static get_screen_from_rect(rect: Rect2): int64
        
        /** Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         *  See also [method screen_get_size].  
         *      
         *  **Note:** On Linux (Wayland) this method always returns `(0, 0)`.  
         */
        static screen_get_position(screen: int64 = -1): Vector2i
        
        /** Returns the screen's size in pixels. See also [method screen_get_position] and [method screen_get_usable_rect]. */
        static screen_get_size(screen: int64 = -1): Vector2i
        
        /** Returns the portion of the screen that is not obstructed by a status bar in pixels. See also [method screen_get_size]. */
        static screen_get_usable_rect(screen: int64 = -1): Rect2i
        
        /** Returns the dots per inch density of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.  
         *      
         *  **Note:** On macOS, returned value is inaccurate if fractional display scaling mode is used.  
         *      
         *  **Note:** On Android devices, the actual screen densities are grouped into six generalized densities:  
         *  [codeblock lang=text]  
         *     ldpi - 120 dpi  
         *     mdpi - 160 dpi  
         *     hdpi - 240 dpi  
         *    xhdpi - 320 dpi  
         *   xxhdpi - 480 dpi  
         *  xxxhdpi - 640 dpi  
         *  [/codeblock]  
         *      
         *  **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS and Windows. Returns `72` on unsupported platforms.  
         */
        static screen_get_dpi(screen: int64 = -1): int64
        
        /** Returns the scale factor of the specified screen by index.  
         *      
         *  **Note:** On macOS, the returned value is `2.0` for hiDPI (Retina) screens, and `1.0` for all other cases.  
         *      
         *  **Note:** On Linux (Wayland), the returned value is accurate only when [param screen] is [constant SCREEN_OF_MAIN_WINDOW]. Due to API limitations, passing a direct index will return a rounded-up integer, if the screen has a fractional scale (e.g. `1.25` would get rounded up to `2.0`).  
         *      
         *  **Note:** This method is implemented only on macOS and Linux (Wayland).  
         */
        static screen_get_scale(screen: int64 = -1): float64
        
        /** Returns `true` if touch events are available (Android or iOS), the capability is detected on the Web platform or if [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is `true`. */
        static is_touchscreen_available(): boolean
        
        /** Returns the greatest scale factor of all screens.  
         *      
         *  **Note:** On macOS returned value is `2.0` if there is at least one hiDPI (Retina) screen in the system, and `1.0` in all other cases.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static screen_get_max_scale(): float64
        
        /** Returns the current refresh rate of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.  
         *      
         *  **Note:** Returns `-1.0` if the DisplayServer fails to find the refresh rate for the specified screen. On Web, [method screen_get_refresh_rate] will always return `-1.0` as there is no way to retrieve the refresh rate on that platform.  
         *  To fallback to a default refresh rate if the method fails, try:  
         *    
         */
        static screen_get_refresh_rate(screen: int64 = -1): float64
        
        /** Returns color of the display pixel at the [param position].  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS, and Windows.  
         *      
         *  **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.  
         */
        static screen_get_pixel(position: Vector2i): Color
        
        /** Returns screenshot of the [param screen].  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS, and Windows.  
         *      
         *  **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.  
         */
        static screen_get_image(screen: int64 = -1): Image
        
        /** Sets the [param screen]'s [param orientation]. See also [method screen_get_orientation].  
         *      
         *  **Note:** On iOS, this method has no effect if [member ProjectSettings.display/window/handheld/orientation] is not set to [constant SCREEN_SENSOR].  
         */
        static screen_set_orientation(orientation: DisplayServer.ScreenOrientation, screen: int64 = -1): void
        
        /** Returns the [param screen]'s current orientation. See also [method screen_set_orientation].  
         *      
         *  **Note:** This method is implemented on Android and iOS.  
         */
        static screen_get_orientation(screen: int64 = -1): DisplayServer.ScreenOrientation
        
        /** Sets whether the screen should never be turned off by the operating system's power-saving measures. See also [method screen_is_kept_on]. */
        static screen_set_keep_on(enable: boolean): void
        
        /** Returns `true` if the screen should never be turned off by the operating system's power-saving measures. See also [method screen_set_keep_on]. */
        static screen_is_kept_on(): boolean
        
        /** Returns the list of Godot window IDs belonging to this process.  
         *      
         *  **Note:** Native dialogs are not included in this list.  
         */
        static get_window_list(): PackedInt32Array
        
        /** Returns the ID of the window at the specified screen [param position] (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         */
        static get_window_at_screen_position(position: Vector2i): int64
        
        /** Returns internal structure pointers for use in plugins.  
         *      
         *  **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS, and Windows.  
         */
        static window_get_native_handle(handle_type: DisplayServer.HandleType, window_id: int64 = 0): int64
        
        /** Returns ID of the active popup window, or [constant INVALID_WINDOW_ID] if there is none. */
        static window_get_active_popup(): int64
        
        /** Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup. */
        static window_set_popup_safe_rect(window: int64, rect: Rect2i): void
        
        /** Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. */
        static window_get_popup_safe_rect(window: int64): Rect2i
        
        /** Sets the title of the given window to [param title].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.title] instead.  
         *      
         *  **Note:** Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.  
         */
        static window_set_title(title: string, window_id: int64 = 0): void
        
        /** Returns the estimated window title bar size (including text and window buttons) for the window specified by [param window_id] (in pixels). This method does not change the window title.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static window_get_title_size(title: string, window_id: int64 = 0): Vector2i
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS and Windows.  
         */
        static window_set_mouse_passthrough(region: PackedVector2Array | Vector2[], window_id: int64 = 0): void
        
        /** Returns the screen the window specified by [param window_id] is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also [method window_set_current_screen]. */
        static window_get_current_screen(window_id: int64 = 0): int64
        
        /** Moves the window specified by [param window_id] to the specified [param screen]. See also [method window_get_current_screen]. */
        static window_set_current_screen(screen: int64, window_id: int64 = 0): void
        
        /** Returns the position of the client area of the given window on the screen. */
        static window_get_position(window_id: int64 = 0): Vector2i
        
        /** Returns the position of the given window on the screen including the borders drawn by the operating system. See also [method window_get_position]. */
        static window_get_position_with_decorations(window_id: int64 = 0): Vector2i
        
        /** Sets the position of the given window to [param position]. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         *  See also [method window_get_position] and [method window_set_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.position] instead.  
         *      
         *  **Note:** On Linux (Wayland): this method is a no-op.  
         */
        static window_set_position(position: Vector2i, window_id: int64 = 0): void
        
        /** Returns the size of the window specified by [param window_id] (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also [method window_get_size_with_decorations], [method window_set_size] and [method window_get_position]. */
        static window_get_size(window_id: int64 = 0): Vector2i
        
        /** Sets the size of the given window to [param size] (in pixels). See also [method window_get_size] and [method window_get_position].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.size] instead.  
         */
        static window_set_size(size: Vector2i, window_id: int64 = 0): void
        
        /** Sets the [param callback] that will be called when the window specified by [param window_id] is moved or resized.  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static window_set_rect_changed_callback(callback: Callable, window_id: int64 = 0): void
        
        /** Sets the [param callback] that will be called when an event occurs in the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static window_set_window_event_callback(callback: Callable, window_id: int64 = 0): void
        
        /** Sets the [param callback] that should be called when any [InputEvent] is sent to the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static window_set_input_event_callback(callback: Callable, window_id: int64 = 0): void
        
        /** Sets the [param callback] that should be called when text is entered using the virtual keyboard to the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static window_set_input_text_callback(callback: Callable, window_id: int64 = 0): void
        
        /** Sets the [param callback] that should be called when files are dropped from the operating system's file manager to the window specified by [param window_id]. [param callback] should take one [PackedStringArray] argument, which is the list of dropped files.  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         *      
         *  **Note:** This method is implemented on Windows, macOS, Linux (X11/Wayland), and Web.  
         */
        static window_set_drop_files_callback(callback: Callable, window_id: int64 = 0): void
        
        /** Returns the [method Object.get_instance_id] of the [Window] the [param window_id] is attached to. */
        static window_get_attached_instance_id(window_id: int64 = 0): int64
        
        /** Returns the window's maximum size (in pixels). See also [method window_set_max_size]. */
        static window_get_max_size(window_id: int64 = 0): Vector2i
        
        /** Sets the maximum size of the window specified by [param window_id] in pixels. Normally, the user will not be able to drag the window to make it larger than the specified size. See also [method window_get_max_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.max_size] instead.  
         *      
         *  **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.  
         */
        static window_set_max_size(max_size: Vector2i, window_id: int64 = 0): void
        
        /** Returns the window's minimum size (in pixels). See also [method window_set_min_size]. */
        static window_get_min_size(window_id: int64 = 0): Vector2i
        
        /** Sets the minimum size for the given window to [param min_size] in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also [method window_get_min_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.min_size] instead.  
         *      
         *  **Note:** By default, the main window has a minimum size of `Vector2i(64, 64)`. This prevents issues that can arise when the window is resized to a near-zero size.  
         *      
         *  **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.  
         */
        static window_set_min_size(min_size: Vector2i, window_id: int64 = 0): void
        
        /** Returns the size of the window specified by [param window_id] (in pixels), including the borders drawn by the operating system. See also [method window_get_size]. */
        static window_get_size_with_decorations(window_id: int64 = 0): Vector2i
        
        /** Returns the mode of the given window. */
        static window_get_mode(window_id: int64 = 0): DisplayServer.WindowMode
        
        /** Sets window mode for the given window to [param mode]. See [enum WindowMode] for possible values and how each mode behaves.  
         *      
         *  **Note:** Setting the window to full screen forcibly sets the borderless flag to `true`, so make sure to set it back to `false` when not wanted.  
         */
        static window_set_mode(mode: DisplayServer.WindowMode, window_id: int64 = 0): void
        
        /** Enables or disables the given window's given [param flag]. See [enum WindowFlags] for possible values and their behavior. */
        static window_set_flag(flag: DisplayServer.WindowFlags, enabled: boolean, window_id: int64 = 0): void
        
        /** Returns the current value of the given window's [param flag]. */
        static window_get_flag(flag: DisplayServer.WindowFlags, window_id: int64 = 0): boolean
        
        /** When [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set, set offset to the center of the first titlebar button.  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         */
        static window_set_window_buttons_offset(offset: Vector2i, window_id: int64 = 0): void
        
        /** Returns left margins (`x`), right margins (`y`) and height (`z`) of the title that are safe to use (contains no buttons or other elements) when [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set. */
        static window_get_safe_title_margins(window_id: int64 = 0): Vector3i
        
        /** Makes the window specified by [param window_id] request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system. */
        static window_request_attention(window_id: int64 = 0): void
        
        /** Moves the window specified by [param window_id] to the foreground, so that it is visible over other windows. */
        static window_move_to_foreground(window_id: int64 = 0): void
        
        /** Returns `true` if the window specified by [param window_id] is focused. */
        static window_is_focused(window_id: int64 = 0): boolean
        
        /** Returns `true` if anything can be drawn in the window specified by [param window_id], `false` otherwise. Using the `--disable-render-loop` command line argument or a headless build will return `false`. */
        static window_can_draw(window_id: int64 = 0): boolean
        
        /** Sets window transient parent. Transient window is will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *      
         *  **Note:** It's recommended to change this value using [member Window.transient] instead.  
         *      
         *  **Note:** The behavior might be different depending on the platform.  
         */
        static window_set_transient(window_id: int64, parent_window_id: int64): void
        
        /** If set to `true`, this window will always stay on top of its parent window, parent window will ignore input while this window is opened.  
         *      
         *  **Note:** On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static window_set_exclusive(window_id: int64, exclusive: boolean): void
        
        /** Sets whether [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] should be enabled for the window specified by [param window_id]. See also [method window_set_ime_position]. */
        static window_set_ime_active(active: boolean, window_id: int64 = 0): void
        
        /** Sets the position of the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] popup for the specified [param window_id]. Only effective if [method window_set_ime_active] was set to `true` for the specified [param window_id]. */
        static window_set_ime_position(position: Vector2i, window_id: int64 = 0): void
        
        /** Sets the V-Sync mode of the given window. See also [member ProjectSettings.display/window/vsync/vsync_mode].  
         *  See [enum DisplayServer.VSyncMode] for possible values and how they affect the behavior of your application.  
         *  Depending on the platform and used renderer, the engine will fall back to [constant VSYNC_ENABLED] if the desired mode is not supported.  
         *      
         *  **Note:** V-Sync modes other than [constant VSYNC_ENABLED] are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        static window_set_vsync_mode(vsync_mode: DisplayServer.VSyncMode, window_id: int64 = 0): void
        
        /** Returns the V-Sync mode of the given window. */
        static window_get_vsync_mode(window_id: int64 = 0): DisplayServer.VSyncMode
        
        /** Returns `true` if the given window can be maximized (the maximize button is enabled). */
        static window_is_maximize_allowed(window_id: int64 = 0): boolean
        
        /** Returns `true`, if double-click on a window title should maximize it.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static window_maximize_on_title_dbl_click(): boolean
        
        /** Returns `true`, if double-click on a window title should minimize it.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static window_minimize_on_title_dbl_click(): boolean
        
        /** Returns the text selection in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] composition string, with the [Vector2i]'s `x` component being the caret position and `y` being the length of the selection.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static ime_get_selection(): Vector2i
        
        /** Returns the composition string contained within the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] window.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static ime_get_text(): string
        
        /** Shows the virtual keyboard if the platform has one.  
         *  [param existing_text] parameter is useful for implementing your own [LineEdit] or [TextEdit], as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).  
         *  [param position] parameter is the screen space [Rect2] of the edited text.  
         *  [param type] parameter allows configuring which type of virtual keyboard to show.  
         *  [param max_length] limits the number of characters that can be entered if different from `-1`.  
         *  [param cursor_start] can optionally define the current text cursor position if [param cursor_end] is not set.  
         *  [param cursor_start] and [param cursor_end] can optionally define the current text selection.  
         *      
         *  **Note:** This method is implemented on Android, iOS and Web.  
         */
        static virtual_keyboard_show(existing_text: string, position: Rect2 = new Rect2(0, 0, 0, 0), type: DisplayServer.VirtualKeyboardType = 0, max_length: int64 = -1, cursor_start: int64 = -1, cursor_end: int64 = -1): void
        
        /** Hides the virtual keyboard if it is shown, does nothing otherwise. */
        static virtual_keyboard_hide(): void
        
        /** Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden. */
        static virtual_keyboard_get_height(): int64
        
        /** Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also [method cursor_get_shape] and [method cursor_set_custom_image]. */
        static cursor_set_shape(shape: DisplayServer.CursorShape): void
        
        /** Returns the default mouse cursor shape set by [method cursor_set_shape]. */
        static cursor_get_shape(): DisplayServer.CursorShape
        
        /** Sets a custom mouse cursor image for the given [param shape]. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance.  
         *  [param cursor] can be either a [Texture2D] or an [Image], and it should not be larger than 256×256 to display correctly. Optionally, [param hotspot] can be set to offset the image's position relative to the click point. By default, [param hotspot] is set to the top-left corner of the image. See also [method cursor_set_shape].  
         */
        static cursor_set_custom_image(cursor: Resource, shape: DisplayServer.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        
        /** Returns `true` if positions of **OK** and **Cancel** buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing [member ProjectSettings.gui/common/swap_cancel_ok].  
         *      
         *  **Note:** This doesn't affect native dialogs such as the ones spawned by [method DisplayServer.dialog_show].  
         */
        static get_swap_cancel_ok(): boolean
        
        /** Allows the [param process_id] PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static enable_for_stealing_focus(process_id: int64): void
        
        /** Shows a text dialog which uses the operating system's native look-and-feel. [param callback] should accept a single [int] parameter which corresponds to the index of the pressed button.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG] feature. Supported platforms include macOS and Windows.  
         */
        static dialog_show(title: string, description: string, buttons: PackedStringArray | string[], callback: Callable): GError
        
        /** Shows a text input dialog which uses the operating system's native look-and-feel. [param callback] should accept a single [String] parameter which contains the text field's contents.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_INPUT] feature. Supported platforms include macOS and Windows.  
         */
        static dialog_input_text(title: string, description: string, existing_text: string, callback: Callable): GError
        
        /** Displays OS native dialog for selecting files or directories in the file system.  
         *  Each filter string in the [param filters] array should be formatted like this: `*.txt,*.doc;Text Files`. The description text of the filter is optional and can be omitted. See also [member FileDialog.filters].  
         *  Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int`.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_FILE] feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.  
         *      
         *  **Note:** [param current_directory] might be ignored.  
         *      
         *  **Note:** On Linux, [param show_hidden] is ignored.  
         *      
         *  **Note:** On macOS, native file dialogs have no title.  
         *      
         *  **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.  
         */
        static file_dialog_show(title: string, current_directory: string, filename: string, show_hidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], callback: Callable): GError
        
        /** Displays OS native dialog for selecting files or directories in the file system with additional user selectable options.  
         *  Each filter string in the [param filters] array should be formatted like this: `*.txt,*.doc;Text Files`. The description text of the filter is optional and can be omitted. See also [member FileDialog.filters].  
         *  [param options] is array of [Dictionary]s with the following keys:  
         *  - `"name"` - option's name [String].  
         *  - `"values"` - [PackedStringArray] of values. If empty, boolean option (check box) is used.  
         *  - `"default"` - default selected option index ([int]) or default boolean value ([bool]).  
         *  Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int, selected_option: Dictionary`.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_FILE] feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.  
         *      
         *  **Note:** [param current_directory] might be ignored.  
         *      
         *  **Note:** On Linux (X11), [param show_hidden] is ignored.  
         *      
         *  **Note:** On macOS, native file dialogs have no title.  
         *      
         *  **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.  
         */
        static file_dialog_with_options_show(title: string, current_directory: string, root: string, filename: string, show_hidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], options: GArray, callback: Callable): GError
        
        /** Returns the number of keyboard layouts.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_get_layout_count(): int64
        
        /** Returns active keyboard layout index.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.  
         */
        static keyboard_get_current_layout(): int64
        
        /** Sets the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_set_current_layout(index: int64): void
        
        /** Returns the ISO-639/BCP-47 language code of the keyboard layout at position [param index].  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_get_layout_language(index: int64): string
        
        /** Returns the localized name of the keyboard layout at position [param index].  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_get_layout_name(index: int64): string
        
        /** Converts a physical (US QWERTY) [param keycode] to one in the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_get_keycode_from_physical(keycode: Key): Key
        
        /** Converts a physical (US QWERTY) [param keycode] to localized label printed on the key in the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboard_get_label_from_physical(keycode: Key): Key
        
        /** Perform window manager processing, including input flushing. See also [method force_process_and_drop_events], [method Input.flush_buffered_events] and [member Input.use_accumulated_input]. */
        static process_events(): void
        
        /** Forces window manager processing while ignoring all [InputEvent]s. See also [method process_events].  
         *      
         *  **Note:** This method is implemented on Windows and macOS.  
         */
        static force_process_and_drop_events(): void
        
        /** Sets the window icon (usually displayed in the top-left corner) in the operating system's  *native*  format. The file at [param filename] must be in `.ico` format on Windows or `.icns` on macOS. By using specially crafted `.ico` or `.icns` icons, [method set_native_icon] allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use [method set_icon] instead.  
         *      
         *  **Note:** Requires support for [constant FEATURE_NATIVE_ICON].  
         */
        static set_native_icon(filename: string): void
        
        /** Sets the window icon (usually displayed in the top-left corner) with an [Image]. To use icons in the operating system's native format, use [method set_native_icon] instead.  
         *      
         *  **Note:** Requires support for [constant FEATURE_ICON].  
         */
        static set_icon(image: Image): void
        
        /** Creates a new application status indicator with the specified icon, tooltip, and activation callback.  
         *  [param callback] should take two arguments: the pressed mouse button (one of the [enum MouseButton] constants) and the click position in screen coordinates (a [Vector2i]).  
         */
        static create_status_indicator(icon: Texture2D, tooltip: string, callback: Callable): int64
        
        /** Sets the application status indicator icon.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static status_indicator_set_icon(id: int64, icon: Texture2D): void
        
        /** Sets the application status indicator tooltip.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static status_indicator_set_tooltip(id: int64, tooltip: string): void
        
        /** Sets the application status indicator native popup menu.  
         *      
         *  **Note:** On macOS, the menu is activated by any mouse button. Its activation callback is  *not*  triggered.  
         *      
         *  **Note:** On Windows, the menu is activated by the right mouse button, selecting the status icon and pressing [kbd]Shift + F10[/kbd], or the applications key. The menu's activation callback for the other mouse buttons is still triggered.  
         *      
         *  **Note:** Native popup is only supported if [NativeMenu] supports the [constant NativeMenu.FEATURE_POPUP_MENU] feature.  
         */
        static status_indicator_set_menu(id: int64, menu_rid: RID): void
        
        /** Sets the application status indicator activation callback. [param callback] should take two arguments: [int] mouse button index (one of [enum MouseButton] values) and [Vector2i] click position in screen coordinates.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static status_indicator_set_callback(id: int64, callback: Callable): void
        
        /** Returns the rectangle for the given status indicator [param id] in screen coordinates. If the status indicator is not visible, returns an empty [Rect2].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static status_indicator_get_rect(id: int64): Rect2
        
        /** Removes the application status indicator. */
        static delete_status_indicator(id: int64): void
        
        /** Returns the total number of available tablet drivers.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tablet_get_driver_count(): int64
        
        /** Returns the tablet driver name for the given index.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tablet_get_driver_name(idx: int64): string
        
        /** Returns current active tablet driver name.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tablet_get_current_driver(): string
        
        /** Set active tablet driver name.  
         *  Supported drivers:  
         *  - `winink`: Windows Ink API, default (Windows 8.1+ required).  
         *  - `wintab`: Wacom Wintab API (compatible device driver required).  
         *  - `dummy`: Dummy driver, tablet input is disabled.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tablet_set_current_driver(name: string): void
        
        /** Returns `true` if the window background can be made transparent. This method returns `false` if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`, or if transparency is not supported by the renderer or OS compositor. */
        static is_window_transparency_available(): boolean
        
        /** Registers an [Object] which represents an additional output that will be rendered too, beyond normal windows. The [Object] is only used as an identifier, which can be later passed to [method unregister_additional_output].  
         *  This can be used to prevent Godot from skipping rendering when no normal windows are visible.  
         */
        static register_additional_output(object: Object): void
        
        /** Unregisters an [Object] representing an additional output, that was registered via [method register_additional_output]. */
        static unregister_additional_output(object: Object): void
        
        /** Returns `true` if any additional outputs have been registered via [method register_additional_output]. */
        static has_additional_outputs(): boolean
    }
    // _singleton_class_: NativeMenu
    namespace NativeMenu {
        enum Feature {
            /** [NativeMenu] supports native global main menu. */
            FEATURE_GLOBAL_MENU = 0,
            
            /** [NativeMenu] supports native popup menus. */
            FEATURE_POPUP_MENU = 1,
            
            /** [NativeMenu] supports menu open and close callbacks. */
            FEATURE_OPEN_CLOSE_CALLBACK = 2,
            
            /** [NativeMenu] supports menu item hover callback. */
            FEATURE_HOVER_CALLBACK = 3,
            
            /** [NativeMenu] supports menu item accelerator/key callback. */
            FEATURE_KEY_CALLBACK = 4,
        }
        enum SystemMenus {
            /** Invalid special system menu ID. */
            INVALID_MENU_ID = 0,
            
            /** Global main menu ID. */
            MAIN_MENU_ID = 1,
            
            /** Application (first menu after "Apple" menu on macOS) menu ID. */
            APPLICATION_MENU_ID = 2,
            
            /** "Window" menu ID (on macOS this menu includes standard window control items and a list of open windows). */
            WINDOW_MENU_ID = 3,
            
            /** "Help" menu ID (on macOS this menu includes help search bar). */
            HELP_MENU_ID = 4,
            
            /** Dock icon right-click menu ID (on macOS this menu include standard application control items and a list of open windows). */
            DOCK_MENU_ID = 5,
        }
    }
    /** A server interface for OS native menus.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_nativemenu.html  
     */
    class NativeMenu extends Object {
        /** Returns `true` if the specified [param feature] is supported by the current [NativeMenu], `false` otherwise.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static has_feature(feature: NativeMenu.Feature): boolean
        
        /** Returns `true` if a special system menu is supported.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static has_system_menu(menu_id: NativeMenu.SystemMenus): boolean
        
        /** Returns RID of a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_system_menu(menu_id: NativeMenu.SystemMenus): RID
        
        /** Returns readable name of a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_system_menu_name(menu_id: NativeMenu.SystemMenus): string
        
        /** Creates a new global menu object.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static create_menu(): RID
        
        /** Returns `true` if [param rid] is valid global menu.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static has_menu(rid: RID): boolean
        
        /** Frees a global menu object created by this [NativeMenu].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static free_menu(rid: RID): void
        
        /** Returns global menu size.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_size(rid: RID): Vector2
        
        /** Shows the global menu at [param position] in the screen coordinates.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static popup(rid: RID, position: Vector2i): void
        
        /** Sets the menu text layout direction from right-to-left if [param is_rtl] is `true`.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_interface_direction(rid: RID, is_rtl: boolean): void
        
        /** Registers callable to emit after the menu is closed.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_popup_open_callback(rid: RID, callback: Callable): void
        
        /** Returns global menu open callback.  
         *  b]Note:** This method is implemented only on macOS.  
         */
        static get_popup_open_callback(rid: RID): Callable
        
        /** Registers callable to emit when the menu is about to show.  
         *      
         *  **Note:** The OS can simulate menu opening to track menu item changes and global shortcuts, in which case the corresponding close callback is not triggered. Use [method is_opened] to check if the menu is currently opened.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_popup_close_callback(rid: RID, callback: Callable): void
        
        /** Returns global menu close callback.  
         *  b]Note:** This method is implemented only on macOS.  
         */
        static get_popup_close_callback(rid: RID): Callable
        
        /** Sets the minimum width of the global menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_minimum_width(rid: RID, width: float64): void
        
        /** Returns global menu minimum width.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_minimum_width(rid: RID): float64
        
        /** Returns `true` if the menu is currently opened.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static is_opened(rid: RID): boolean
        
        /** Adds an item that will act as a submenu of the global menu [param rid]. The [param submenu_rid] argument is the RID of the global menu that will be shown when the item is clicked.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static add_submenu_item(rid: RID, label: string, submenu_rid: RID, tag: any = <any> {}, index: int64 = -1): int64
        
        /** Adds a new item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_item(rid: RID, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new checkable item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_check_item(rid: RID, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_icon_item(rid: RID, icon: Texture2D, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new checkable item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_icon_check_item(rid: RID, icon: Texture2D, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new radio-checkable item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_radio_check_item(rid: RID, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new radio-checkable item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_icon_radio_check_item(rid: RID, icon: Texture2D, label: string, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a new item with text [param label] to the global menu [param rid].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** By default, there's no indication of the current item state, it should be changed manually.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static add_multistate_item(rid: RID, label: string, max_states: int64, default_state: int64, callback: Callable = new Callable(), key_callback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        
        /** Adds a separator between items to the global menu [param rid]. Separators also occupy an index.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static add_separator(rid: RID, index: int64 = -1): int64
        
        /** Returns the index of the item with the specified [param text]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static find_item_index_with_text(rid: RID, text: string): int64
        
        /** Returns the index of the item with the specified [param tag]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static find_item_index_with_tag(rid: RID, tag: any): int64
        
        /** Returns the index of the item with the submenu specified by [param submenu_rid]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static find_item_index_with_submenu(rid: RID, submenu_rid: RID): int64
        
        /** Returns `true` if the item at index [param idx] is checked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static is_item_checked(rid: RID, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static is_item_checkable(rid: RID, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static is_item_radio_checkable(rid: RID, idx: int64): boolean
        
        /** Returns the callback of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_callback(rid: RID, idx: int64): Callable
        
        /** Returns the callback of the item accelerator at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_item_key_callback(rid: RID, idx: int64): Callable
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_tag(rid: RID, idx: int64): any
        
        /** Returns the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_text(rid: RID, idx: int64): string
        
        /** Returns the submenu ID of the item at index [param idx]. See [method add_submenu_item] for more info on how to add a submenu.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_submenu(rid: RID, idx: int64): RID
        
        /** Returns the accelerator of the item at index [param idx]. Accelerators are special combinations of keys that activate the item, no matter which control is focused.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_item_accelerator(rid: RID, idx: int64): Key
        
        /** Returns `true` if the item at index [param idx] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static is_item_disabled(rid: RID, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is hidden.  
         *  See [method set_item_hidden] for more info on how to hide an item.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static is_item_hidden(rid: RID, idx: int64): boolean
        
        /** Returns the tooltip associated with the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_item_tooltip(rid: RID, idx: int64): string
        
        /** Returns the state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_state(rid: RID, idx: int64): int64
        
        /** Returns number of states of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_max_states(rid: RID, idx: int64): int64
        
        /** Returns the icon of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_icon(rid: RID, idx: int64): Texture2D
        
        /** Returns the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static get_item_indentation_level(rid: RID, idx: int64): int64
        
        /** Sets the checkstate status of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_checked(rid: RID, idx: int64, checked: boolean): void
        
        /** Sets whether the item at index [param idx] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_checkable(rid: RID, idx: int64, checkable: boolean): void
        
        /** Sets the type of the item at the specified index [param idx] to radio button. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_radio_checkable(rid: RID, idx: int64, checkable: boolean): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when an item is pressed.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_callback(rid: RID, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. The callback is emitted when an item is hovered.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_hover_callbacks(rid: RID, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when its accelerator is activated.  
         *      
         *  **Note:** The [param key_callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_key_callback(rid: RID, idx: int64, key_callback: Callable): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_tag(rid: RID, idx: int64, tag: any): void
        
        /** Sets the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_text(rid: RID, idx: int64, text: string): void
        
        /** Sets the submenu RID of the item at index [param idx]. The submenu is a global menu that would be shown when the item is clicked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_submenu(rid: RID, idx: int64, submenu_rid: RID): void
        
        /** Sets the accelerator of the item at index [param idx]. [param keycode] can be a single [enum Key], or a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_accelerator(rid: RID, idx: int64, keycode: Key): void
        
        /** Enables/disables the item at index [param idx]. When it is disabled, it can't be selected and its action can't be invoked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_disabled(rid: RID, idx: int64, disabled: boolean): void
        
        /** Hides/shows the item at index [param idx]. When it is hidden, an item does not appear in a menu and its action cannot be invoked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_hidden(rid: RID, idx: int64, hidden: boolean): void
        
        /** Sets the [String] tooltip of the item at the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_tooltip(rid: RID, idx: int64, tooltip: string): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_state(rid: RID, idx: int64, state: int64): void
        
        /** Sets number of state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static set_item_max_states(rid: RID, idx: int64, max_states: int64): void
        
        /** Replaces the [Texture2D] icon of the specified [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** This method is not supported by macOS Dock menu items.  
         */
        static set_item_icon(rid: RID, idx: int64, icon: Texture2D): void
        
        /** Sets the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static set_item_indentation_level(rid: RID, idx: int64, level: int64): void
        
        /** Returns number of items in the global menu [param rid].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static get_item_count(rid: RID): int64
        
        /** Return `true` is global menu is a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static is_system_menu(rid: RID): boolean
        
        /** Removes the item at index [param idx] from the global menu [param rid].  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static remove_item(rid: RID, idx: int64): void
        
        /** Removes all items from the global menu [param rid].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static clear(rid: RID): void
    }
    // _singleton_class_: NavigationServer2D
    /** A server interface for low-level 2D navigation access.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_navigationserver2d.html  
     */
    class NavigationServer2D extends Object {
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static get_maps(): GArray
        
        /** Create a new map. */
        static map_create(): RID
        
        /** Sets the map active. */
        static map_set_active(map: RID, active: boolean): void
        
        /** Returns true if the map is active. */
        static map_is_active(map: RID): boolean
        
        /** Sets the map cell size used to rasterize the navigation mesh vertices. Must match with the cell size of the used navigation meshes. */
        static map_set_cell_size(map: RID, cell_size: float64): void
        
        /** Returns the map cell size used to rasterize the navigation mesh vertices. */
        static map_get_cell_size(map: RID): float64
        
        /** Set the navigation [param map] edge connection use. If [param enabled] is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        
        /** Returns whether the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_get_use_edge_connections(map: RID): boolean
        
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static map_set_edge_connection_margin(map: RID, margin: float64): void
        
        /** Returns the edge connection margin of the map. The edge connection margin is a distance used to connect two regions. */
        static map_get_edge_connection_margin(map: RID): float64
        
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static map_set_link_connection_radius(map: RID, radius: float64): void
        
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static map_get_link_connection_radius(map: RID): float64
        
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static map_get_path(map: RID, origin: Vector2, destination: Vector2, optimize: boolean, navigation_layers: int64 = 1): PackedVector2Array
        
        /** Returns the point closest to the provided [param to_point] on the navigation mesh surface. */
        static map_get_closest_point(map: RID, to_point: Vector2): Vector2
        
        /** Returns the owner region RID for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_owner(map: RID, to_point: Vector2): RID
        
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_links(map: RID): GArray
        
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_regions(map: RID): GArray
        
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_agents(map: RID): GArray
        
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_obstacles(map: RID): GArray
        
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).  
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.  
         *  Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.  
         *      
         *  **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.  
         */
        static map_force_update(map: RID): void
        
        /** Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.  
         *      
         *  **Note:** The iteration id will wrap back to 1 after reaching its range limit.  
         */
        static map_get_iteration_id(map: RID): int64
        
        /** Returns a random position picked from all map region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random region and a random polygon are picked (faster).  
         */
        static map_get_random_point(map: RID, navigation_layers: int64, uniformly: boolean): Vector2
        
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters2D]. Updates the provided [NavigationPathQueryResult2D] result object with the path among other results requested by the query. */
        static query_path(parameters: NavigationPathQueryParameters2D, result: NavigationPathQueryResult2D): void
        
        /** Creates a new region. */
        static region_create(): RID
        
        /** If [param enabled] is `true` the specified [param region] will contribute to its current navigation map. */
        static region_set_enabled(region: RID, enabled: boolean): void
        
        /** Returns `true` if the specified [param region] is enabled. */
        static region_get_enabled(region: RID): boolean
        
        /** If [param enabled] is `true`, the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        
        /** Returns whether the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_get_use_edge_connections(region: RID): boolean
        
        /** Sets the [param enter_cost] for this [param region]. */
        static region_set_enter_cost(region: RID, enter_cost: float64): void
        
        /** Returns the enter cost of this [param region]. */
        static region_get_enter_cost(region: RID): float64
        
        /** Sets the [param travel_cost] for this [param region]. */
        static region_set_travel_cost(region: RID, travel_cost: float64): void
        
        /** Returns the travel cost of this [param region]. */
        static region_get_travel_cost(region: RID): float64
        
        /** Set the `ObjectID` of the object which manages this region. */
        static region_set_owner_id(region: RID, owner_id: int64): void
        
        /** Returns the `ObjectID` of the object which manages this region. */
        static region_get_owner_id(region: RID): int64
        
        /** Returns `true` if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.  
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.  
         *      
         *  **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.  
         */
        static region_owns_point(region: RID, point: Vector2): boolean
        
        /** Sets the map for the region. */
        static region_set_map(region: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static region_get_map(region: RID): RID
        
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer2D.map_get_path]). */
        static region_set_navigation_layers(region: RID, navigation_layers: int64): void
        
        /** Returns the region's navigation layers. */
        static region_get_navigation_layers(region: RID): int64
        
        /** Sets the global transformation for the region. */
        static region_set_transform(region: RID, transform: Transform2D): void
        
        /** Returns the global transformation of this [param region]. */
        static region_get_transform(region: RID): Transform2D
        
        /** Sets the [param navigation_polygon] for the region. */
        static region_set_navigation_polygon(region: RID, navigation_polygon: NavigationPolygon): void
        
        /** Returns how many connections this [param region] has with other regions in the map. */
        static region_get_connections_count(region: RID): int64
        
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_start(region: RID, connection: int64): Vector2
        
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_end(region: RID, connection: int64): Vector2
        
        /** Returns a random position picked from all region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all region polygons and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random polygon and face is picked (faster).  
         */
        static region_get_random_point(region: RID, navigation_layers: int64, uniformly: boolean): Vector2
        
        /** Create a new link between two positions on a map. */
        static link_create(): RID
        
        /** Sets the navigation map [RID] for the link. */
        static link_set_map(link: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static link_get_map(link: RID): RID
        
        /** If [param enabled] is `true`, the specified [param link] will contribute to its current navigation map. */
        static link_set_enabled(link: RID, enabled: boolean): void
        
        /** Returns `true` if the specified [param link] is enabled. */
        static link_get_enabled(link: RID): boolean
        
        /** Sets whether this [param link] can be travelled in both directions. */
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        
        /** Returns whether this [param link] can be travelled in both directions. */
        static link_is_bidirectional(link: RID): boolean
        
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer2D.map_get_path]). */
        static link_set_navigation_layers(link: RID, navigation_layers: int64): void
        
        /** Returns the navigation layers for this [param link]. */
        static link_get_navigation_layers(link: RID): int64
        
        /** Sets the entry position for this [param link]. */
        static link_set_start_position(link: RID, position: Vector2): void
        
        /** Returns the starting position of this [param link]. */
        static link_get_start_position(link: RID): Vector2
        
        /** Sets the exit position for the [param link]. */
        static link_set_end_position(link: RID, position: Vector2): void
        
        /** Returns the ending position of this [param link]. */
        static link_get_end_position(link: RID): Vector2
        
        /** Sets the [param enter_cost] for this [param link]. */
        static link_set_enter_cost(link: RID, enter_cost: float64): void
        
        /** Returns the enter cost of this [param link]. */
        static link_get_enter_cost(link: RID): float64
        
        /** Sets the [param travel_cost] for this [param link]. */
        static link_set_travel_cost(link: RID, travel_cost: float64): void
        
        /** Returns the travel cost of this [param link]. */
        static link_get_travel_cost(link: RID): float64
        
        /** Set the `ObjectID` of the object which manages this link. */
        static link_set_owner_id(link: RID, owner_id: int64): void
        
        /** Returns the `ObjectID` of the object which manages this link. */
        static link_get_owner_id(link: RID): int64
        
        /** Creates the agent. */
        static agent_create(): RID
        
        /** If [param enabled] is `true`, the specified [param agent] uses avoidance. */
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        
        /** Return `true` if the specified [param agent] uses avoidance. */
        static agent_get_avoidance_enabled(agent: RID): boolean
        
        /** Puts the agent in the map. */
        static agent_set_map(agent: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agent_get_map(agent: RID): RID
        
        /** If [param paused] is true the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agent_set_paused(agent: RID, paused: boolean): void
        
        /** Returns `true` if the specified [param agent] is paused. */
        static agent_get_paused(agent: RID): boolean
        
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_neighbor_distance(agent: RID, distance: float64): void
        
        /** Returns the maximum distance to other agents the specified [param agent] takes into account in the navigation. */
        static agent_get_neighbor_distance(agent: RID): float64
        
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_max_neighbors(agent: RID, count: int64): void
        
        /** Returns the maximum number of other agents the specified [param agent] takes into account in the navigation. */
        static agent_get_max_neighbors(agent: RID): int64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_agents(agent: RID, time_horizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to other agents. */
        static agent_get_time_horizon_agents(agent: RID): float64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles. */
        static agent_get_time_horizon_obstacles(agent: RID): float64
        
        /** Sets the radius of the agent. */
        static agent_set_radius(agent: RID, radius: float64): void
        
        /** Returns the radius of the specified [param agent]. */
        static agent_get_radius(agent: RID): float64
        
        /** Sets the maximum speed of the agent. Must be positive. */
        static agent_set_max_speed(agent: RID, max_speed: float64): void
        
        /** Returns the maximum speed of the specified [param agent]. */
        static agent_get_max_speed(agent: RID): float64
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position far away this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agent_set_velocity_forced(agent: RID, velocity: Vector2): void
        
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position far away use [method agent_set_velocity_forced] instead to reset the internal velocity state. */
        static agent_set_velocity(agent: RID, velocity: Vector2): void
        
        /** Returns the velocity of the specified [param agent]. */
        static agent_get_velocity(agent: RID): Vector2
        
        /** Sets the position of the agent in world space. */
        static agent_set_position(agent: RID, position: Vector2): void
        
        /** Returns the position of the specified [param agent] in world space. */
        static agent_get_position(agent: RID): Vector2
        
        /** Returns true if the map got changed the previous frame. */
        static agent_is_map_changed(agent: RID): boolean
        
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.  
         *      
         *  **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].  
         */
        static agent_set_avoidance_callback(agent: RID, callback: Callable): void
        
        /** Return `true` if the specified [param agent] has an avoidance callback. */
        static agent_has_avoidance_callback(agent: RID): boolean
        
        /** Set the agent's `avoidance_layers` bitmask. */
        static agent_set_avoidance_layers(agent: RID, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param agent]. */
        static agent_get_avoidance_layers(agent: RID): int64
        
        /** Set the agent's `avoidance_mask` bitmask. */
        static agent_set_avoidance_mask(agent: RID, mask: int64): void
        
        /** Returns the `avoidance_mask` bitmask of the specified [param agent]. */
        static agent_get_avoidance_mask(agent: RID): int64
        
        /** Set the agent's `avoidance_priority` with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).  
         *  The specified [param agent] does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.  
         */
        static agent_set_avoidance_priority(agent: RID, priority: float64): void
        
        /** Returns the `avoidance_priority` of the specified [param agent]. */
        static agent_get_avoidance_priority(agent: RID): float64
        
        /** Creates a new navigation obstacle. */
        static obstacle_create(): RID
        
        /** If [param enabled] is `true`, the provided [param obstacle] affects avoidance using agents. */
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] has avoidance enabled. */
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        
        /** Sets the navigation map [RID] for the obstacle. */
        static obstacle_set_map(obstacle: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacle_get_map(obstacle: RID): RID
        
        /** If [param paused] is true the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        
        /** Returns `true` if the specified [param obstacle] is paused. */
        static obstacle_get_paused(obstacle: RID): boolean
        
        /** Sets the radius of the dynamic obstacle. */
        static obstacle_set_radius(obstacle: RID, radius: float64): void
        
        /** Returns the radius of the specified dynamic [param obstacle]. */
        static obstacle_get_radius(obstacle: RID): float64
        
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacle_set_velocity(obstacle: RID, velocity: Vector2): void
        
        /** Returns the velocity of the specified dynamic [param obstacle]. */
        static obstacle_get_velocity(obstacle: RID): Vector2
        
        /** Sets the position of the obstacle in world space. */
        static obstacle_set_position(obstacle: RID, position: Vector2): void
        
        /** Returns the position of the specified [param obstacle] in world space. */
        static obstacle_get_position(obstacle: RID): Vector2
        
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector2Array | Vector2[]): void
        
        /** Returns the outline vertices for the specified [param obstacle]. */
        static obstacle_get_vertices(obstacle: RID): PackedVector2Array
        
        /** Set the obstacles's `avoidance_layers` bitmask. */
        static obstacle_set_avoidance_layers(obstacle: RID, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param obstacle]. */
        static obstacle_get_avoidance_layers(obstacle: RID): int64
        
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_polygon]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.  
         *      
         *  **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.  
         *  **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.  
         */
        static parse_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, root_node: Node, callback: Callable = new Callable()): void
        
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: Callable = new Callable()): void
        
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data_async(navigation_polygon: NavigationPolygon, source_geometry_data: NavigationMeshSourceGeometryData2D, callback: Callable = new Callable()): void
        
        /** Returns `true` when the provided navigation polygon is being baked on a background thread. */
        static is_baking_navigation_polygon(navigation_polygon: NavigationPolygon): boolean
        
        /** Creates a new source geometry parser. If a [Callable] is set for the parser with [method source_geometry_parser_set_callback] the callback will be called for every single node that gets parsed whenever [method parse_source_geometry_data] is used. */
        static source_geometry_parser_create(): RID
        
        /** Sets the [param callback] [Callable] for the specific source geometry [param parser]. The [Callable] will receive a call with the following parameters:  
         *  - `navigation_mesh` - The [NavigationPolygon] reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.  
         *  - `source_geometry_data` - The [NavigationMeshSourceGeometryData2D] reference. Add custom source geometry for navigation mesh baking to this object.  
         *  - `node` - The [Node] that is parsed.  
         */
        static source_geometry_parser_set_callback(parser: RID, callback: Callable): void
        
        /** Returns a simplified version of [param path] with less critical path points removed. The simplification amount is in worlds units and controlled by [param epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        static simplify_path(path: PackedVector2Array | Vector2[], epsilon: float64): PackedVector2Array
        
        /** Destroys the given RID. */
        static free_rid(rid: RID): void
        
        /** If `true` enables debug mode on the NavigationServer. */
        static set_debug_enabled(enabled: boolean): void
        
        /** Returns `true` when the NavigationServer has debug enabled. */
        static get_debug_enabled(): boolean
        
        /** Emitted when a navigation map is updated, when a region moves or is modified. */
        static readonly map_changed: Signal1<RID>
        
        /** Emitted when navigation debug settings are changed. Only available in debug builds. */
        static readonly navigation_debug_changed: Signal0
    }
    // _singleton_class_: NavigationServer3D
    namespace NavigationServer3D {
        enum ProcessInfo {
            /** Constant to get the number of active navigation maps. */
            INFO_ACTIVE_MAPS = 0,
            
            /** Constant to get the number of active navigation regions. */
            INFO_REGION_COUNT = 1,
            
            /** Constant to get the number of active navigation agents processing avoidance. */
            INFO_AGENT_COUNT = 2,
            
            /** Constant to get the number of active navigation links. */
            INFO_LINK_COUNT = 3,
            
            /** Constant to get the number of navigation mesh polygons. */
            INFO_POLYGON_COUNT = 4,
            
            /** Constant to get the number of navigation mesh polygon edges. */
            INFO_EDGE_COUNT = 5,
            
            /** Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap. */
            INFO_EDGE_MERGE_COUNT = 6,
            
            /** Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity. */
            INFO_EDGE_CONNECTION_COUNT = 7,
            
            /** Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links. */
            INFO_EDGE_FREE_COUNT = 8,
        }
    }
    /** A server interface for low-level 3D navigation access.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_navigationserver3d.html  
     */
    class NavigationServer3D extends Object {
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static get_maps(): GArray
        
        /** Create a new map. */
        static map_create(): RID
        
        /** Sets the map active. */
        static map_set_active(map: RID, active: boolean): void
        
        /** Returns true if the map is active. */
        static map_is_active(map: RID): boolean
        
        /** Sets the map up direction. */
        static map_set_up(map: RID, up: Vector3): void
        
        /** Returns the map's up direction. */
        static map_get_up(map: RID): Vector3
        
        /** Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes. */
        static map_set_cell_size(map: RID, cell_size: float64): void
        
        /** Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane. */
        static map_get_cell_size(map: RID): float64
        
        /** Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes. */
        static map_set_cell_height(map: RID, cell_height: float64): void
        
        /** Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis. */
        static map_get_cell_height(map: RID): float64
        
        /** Set the map's internal merge rasterizer cell scale used to control merging sensitivity. */
        static map_set_merge_rasterizer_cell_scale(map: RID, scale: float64): void
        
        /** Returns map's internal merge rasterizer cell scale. */
        static map_get_merge_rasterizer_cell_scale(map: RID): float64
        
        /** Set the navigation [param map] edge connection use. If [param enabled] is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_set_use_edge_connections(map: RID, enabled: boolean): void
        
        /** Returns true if the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static map_get_use_edge_connections(map: RID): boolean
        
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static map_set_edge_connection_margin(map: RID, margin: float64): void
        
        /** Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions. */
        static map_get_edge_connection_margin(map: RID): float64
        
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static map_set_link_connection_radius(map: RID, radius: float64): void
        
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static map_get_link_connection_radius(map: RID): float64
        
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static map_get_path(map: RID, origin: Vector3, destination: Vector3, optimize: boolean, navigation_layers: int64 = 1): PackedVector3Array
        
        /** Returns the closest point between the navigation surface and the segment. */
        static map_get_closest_point_to_segment(map: RID, start: Vector3, end: Vector3, use_collision: boolean = false): Vector3
        
        /** Returns the point closest to the provided [param to_point] on the navigation mesh surface. */
        static map_get_closest_point(map: RID, to_point: Vector3): Vector3
        
        /** Returns the normal for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_normal(map: RID, to_point: Vector3): Vector3
        
        /** Returns the owner region RID for the point returned by [method map_get_closest_point]. */
        static map_get_closest_point_owner(map: RID, to_point: Vector3): RID
        
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_links(map: RID): GArray
        
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_regions(map: RID): GArray
        
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_agents(map: RID): GArray
        
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static map_get_obstacles(map: RID): GArray
        
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).  
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.  
         *  Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.  
         *      
         *  **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.  
         */
        static map_force_update(map: RID): void
        
        /** Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.  
         *      
         *  **Note:** The iteration id will wrap back to 1 after reaching its range limit.  
         */
        static map_get_iteration_id(map: RID): int64
        
        /** Returns a random position picked from all map region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random region and a random polygon are picked (faster).  
         */
        static map_get_random_point(map: RID, navigation_layers: int64, uniformly: boolean): Vector3
        
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters3D]. Updates the provided [NavigationPathQueryResult3D] result object with the path among other results requested by the query. */
        static query_path(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D): void
        
        /** Creates a new region. */
        static region_create(): RID
        
        /** If [param enabled] is `true`, the specified [param region] will contribute to its current navigation map. */
        static region_set_enabled(region: RID, enabled: boolean): void
        
        /** Returns `true` if the specified [param region] is enabled. */
        static region_get_enabled(region: RID): boolean
        
        /** If [param enabled] is `true`, the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_set_use_edge_connections(region: RID, enabled: boolean): void
        
        /** Returns true if the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static region_get_use_edge_connections(region: RID): boolean
        
        /** Sets the [param enter_cost] for this [param region]. */
        static region_set_enter_cost(region: RID, enter_cost: float64): void
        
        /** Returns the enter cost of this [param region]. */
        static region_get_enter_cost(region: RID): float64
        
        /** Sets the [param travel_cost] for this [param region]. */
        static region_set_travel_cost(region: RID, travel_cost: float64): void
        
        /** Returns the travel cost of this [param region]. */
        static region_get_travel_cost(region: RID): float64
        
        /** Set the `ObjectID` of the object which manages this region. */
        static region_set_owner_id(region: RID, owner_id: int64): void
        
        /** Returns the `ObjectID` of the object which manages this region. */
        static region_get_owner_id(region: RID): int64
        
        /** Returns `true` if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.  
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.  
         *      
         *  **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.  
         */
        static region_owns_point(region: RID, point: Vector3): boolean
        
        /** Sets the map for the region. */
        static region_set_map(region: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static region_get_map(region: RID): RID
        
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer3D.map_get_path]). */
        static region_set_navigation_layers(region: RID, navigation_layers: int64): void
        
        /** Returns the region's navigation layers. */
        static region_get_navigation_layers(region: RID): int64
        
        /** Sets the global transformation for the region. */
        static region_set_transform(region: RID, transform: Transform3D): void
        
        /** Returns the global transformation of this [param region]. */
        static region_get_transform(region: RID): Transform3D
        
        /** Sets the navigation mesh for the region. */
        static region_set_navigation_mesh(region: RID, navigation_mesh: NavigationMesh): void
        
        /** Returns how many connections this [param region] has with other regions in the map. */
        static region_get_connections_count(region: RID): int64
        
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_start(region: RID, connection: int64): Vector3
        
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static region_get_connection_pathway_end(region: RID, connection: int64): Vector3
        
        /** Returns a random position picked from all region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all region polygons and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random polygon and face is picked (faster).  
         */
        static region_get_random_point(region: RID, navigation_layers: int64, uniformly: boolean): Vector3
        
        /** Create a new link between two positions on a map. */
        static link_create(): RID
        
        /** Sets the navigation map [RID] for the link. */
        static link_set_map(link: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static link_get_map(link: RID): RID
        
        /** If [param enabled] is `true`, the specified [param link] will contribute to its current navigation map. */
        static link_set_enabled(link: RID, enabled: boolean): void
        
        /** Returns `true` if the specified [param link] is enabled. */
        static link_get_enabled(link: RID): boolean
        
        /** Sets whether this [param link] can be travelled in both directions. */
        static link_set_bidirectional(link: RID, bidirectional: boolean): void
        
        /** Returns whether this [param link] can be travelled in both directions. */
        static link_is_bidirectional(link: RID): boolean
        
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer3D.map_get_path]). */
        static link_set_navigation_layers(link: RID, navigation_layers: int64): void
        
        /** Returns the navigation layers for this [param link]. */
        static link_get_navigation_layers(link: RID): int64
        
        /** Sets the entry position for this [param link]. */
        static link_set_start_position(link: RID, position: Vector3): void
        
        /** Returns the starting position of this [param link]. */
        static link_get_start_position(link: RID): Vector3
        
        /** Sets the exit position for the [param link]. */
        static link_set_end_position(link: RID, position: Vector3): void
        
        /** Returns the ending position of this [param link]. */
        static link_get_end_position(link: RID): Vector3
        
        /** Sets the [param enter_cost] for this [param link]. */
        static link_set_enter_cost(link: RID, enter_cost: float64): void
        
        /** Returns the enter cost of this [param link]. */
        static link_get_enter_cost(link: RID): float64
        
        /** Sets the [param travel_cost] for this [param link]. */
        static link_set_travel_cost(link: RID, travel_cost: float64): void
        
        /** Returns the travel cost of this [param link]. */
        static link_get_travel_cost(link: RID): float64
        
        /** Set the `ObjectID` of the object which manages this link. */
        static link_set_owner_id(link: RID, owner_id: int64): void
        
        /** Returns the `ObjectID` of the object which manages this link. */
        static link_get_owner_id(link: RID): int64
        
        /** Creates the agent. */
        static agent_create(): RID
        
        /** If [param enabled] is `true`, the provided [param agent] calculates avoidance. */
        static agent_set_avoidance_enabled(agent: RID, enabled: boolean): void
        
        /** Returns `true` if the provided [param agent] has avoidance enabled. */
        static agent_get_avoidance_enabled(agent: RID): boolean
        
        /** Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.  
         *  If `true` the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, underwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.  
         *  If `false` the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.  
         */
        static agent_set_use_3d_avoidance(agent: RID, enabled: boolean): void
        
        /** Returns `true` if the provided [param agent] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static agent_get_use_3d_avoidance(agent: RID): boolean
        
        /** Puts the agent in the map. */
        static agent_set_map(agent: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agent_get_map(agent: RID): RID
        
        /** If [param paused] is true the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agent_set_paused(agent: RID, paused: boolean): void
        
        /** Returns `true` if the specified [param agent] is paused. */
        static agent_get_paused(agent: RID): boolean
        
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_neighbor_distance(agent: RID, distance: float64): void
        
        /** Returns the maximum distance to other agents the specified [param agent] takes into account in the navigation. */
        static agent_get_neighbor_distance(agent: RID): float64
        
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agent_set_max_neighbors(agent: RID, count: int64): void
        
        /** Returns the maximum number of other agents the specified [param agent] takes into account in the navigation. */
        static agent_get_max_neighbors(agent: RID): int64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_agents(agent: RID, time_horizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to other agents. */
        static agent_get_time_horizon_agents(agent: RID): float64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agent_set_time_horizon_obstacles(agent: RID, time_horizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles. */
        static agent_get_time_horizon_obstacles(agent: RID): float64
        
        /** Sets the radius of the agent. */
        static agent_set_radius(agent: RID, radius: float64): void
        
        /** Returns the radius of the specified [param agent]. */
        static agent_get_radius(agent: RID): float64
        
        /** Updates the provided [param agent] [param height]. */
        static agent_set_height(agent: RID, height: float64): void
        
        /** Returns the `height` of the specified [param agent]. */
        static agent_get_height(agent: RID): float64
        
        /** Sets the maximum speed of the agent. Must be positive. */
        static agent_set_max_speed(agent: RID, max_speed: float64): void
        
        /** Returns the maximum speed of the specified [param agent]. */
        static agent_get_max_speed(agent: RID): float64
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agent_set_velocity_forced(agent: RID, velocity: Vector3): void
        
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use [method agent_set_velocity_forced] as well to reset the internal simulation velocity. */
        static agent_set_velocity(agent: RID, velocity: Vector3): void
        
        /** Returns the velocity of the specified [param agent]. */
        static agent_get_velocity(agent: RID): Vector3
        
        /** Sets the position of the agent in world space. */
        static agent_set_position(agent: RID, position: Vector3): void
        
        /** Returns the position of the specified [param agent] in world space. */
        static agent_get_position(agent: RID): Vector3
        
        /** Returns true if the map got changed the previous frame. */
        static agent_is_map_changed(agent: RID): boolean
        
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.  
         *      
         *  **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].  
         */
        static agent_set_avoidance_callback(agent: RID, callback: Callable): void
        
        /** Return `true` if the specified [param agent] has an avoidance callback. */
        static agent_has_avoidance_callback(agent: RID): boolean
        
        /** Set the agent's `avoidance_layers` bitmask. */
        static agent_set_avoidance_layers(agent: RID, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param agent]. */
        static agent_get_avoidance_layers(agent: RID): int64
        
        /** Set the agent's `avoidance_mask` bitmask. */
        static agent_set_avoidance_mask(agent: RID, mask: int64): void
        
        /** Returns the `avoidance_mask` bitmask of the specified [param agent]. */
        static agent_get_avoidance_mask(agent: RID): int64
        
        /** Set the agent's `avoidance_priority` with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).  
         *  The specified [param agent] does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.  
         */
        static agent_set_avoidance_priority(agent: RID, priority: float64): void
        
        /** Returns the `avoidance_priority` of the specified [param agent]. */
        static agent_get_avoidance_priority(agent: RID): float64
        
        /** Creates a new obstacle. */
        static obstacle_create(): RID
        
        /** If [param enabled] is `true`, the provided [param obstacle] affects avoidance using agents. */
        static obstacle_set_avoidance_enabled(obstacle: RID, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] has avoidance enabled. */
        static obstacle_get_avoidance_enabled(obstacle: RID): boolean
        
        /** Sets if the [param obstacle] uses the 2D avoidance or the 3D avoidance while avoidance is enabled. */
        static obstacle_set_use_3d_avoidance(obstacle: RID, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static obstacle_get_use_3d_avoidance(obstacle: RID): boolean
        
        /** Assigns the [param obstacle] to a navigation map. */
        static obstacle_set_map(obstacle: RID, map: RID): void
        
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacle_get_map(obstacle: RID): RID
        
        /** If [param paused] is true the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacle_set_paused(obstacle: RID, paused: boolean): void
        
        /** Returns `true` if the specified [param obstacle] is paused. */
        static obstacle_get_paused(obstacle: RID): boolean
        
        /** Sets the radius of the dynamic obstacle. */
        static obstacle_set_radius(obstacle: RID, radius: float64): void
        
        /** Returns the radius of the specified dynamic [param obstacle]. */
        static obstacle_get_radius(obstacle: RID): float64
        
        /** Sets the [param height] for the [param obstacle]. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance. */
        static obstacle_set_height(obstacle: RID, height: float64): void
        
        /** Returns the `height` of the specified [param obstacle]. */
        static obstacle_get_height(obstacle: RID): float64
        
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacle_set_velocity(obstacle: RID, velocity: Vector3): void
        
        /** Returns the velocity of the specified dynamic [param obstacle]. */
        static obstacle_get_velocity(obstacle: RID): Vector3
        
        /** Updates the [param position] in world space for the [param obstacle]. */
        static obstacle_set_position(obstacle: RID, position: Vector3): void
        
        /** Returns the position of the specified [param obstacle] in world space. */
        static obstacle_get_position(obstacle: RID): Vector3
        
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacle_set_vertices(obstacle: RID, vertices: PackedVector3Array | Vector3[]): void
        
        /** Returns the outline vertices for the specified [param obstacle]. */
        static obstacle_get_vertices(obstacle: RID): PackedVector3Array
        
        /** Set the obstacles's `avoidance_layers` bitmask. */
        static obstacle_set_avoidance_layers(obstacle: RID, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param obstacle]. */
        static obstacle_get_avoidance_layers(obstacle: RID): int64
        
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.  
         *      
         *  **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.  
         *  **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.  
         */
        static parse_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, root_node: Node, callback: Callable = new Callable()): void
        
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: Callable = new Callable()): void
        
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bake_from_source_geometry_data_async(navigation_mesh: NavigationMesh, source_geometry_data: NavigationMeshSourceGeometryData3D, callback: Callable = new Callable()): void
        
        /** Returns `true` when the provided navigation mesh is being baked on a background thread. */
        static is_baking_navigation_mesh(navigation_mesh: NavigationMesh): boolean
        
        /** Creates a new source geometry parser. If a [Callable] is set for the parser with [method source_geometry_parser_set_callback] the callback will be called for every single node that gets parsed whenever [method parse_source_geometry_data] is used. */
        static source_geometry_parser_create(): RID
        
        /** Sets the [param callback] [Callable] for the specific source geometry [param parser]. The [Callable] will receive a call with the following parameters:  
         *  - `navigation_mesh` - The [NavigationMesh] reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.  
         *  - `source_geometry_data` - The [NavigationMeshSourceGeometryData3D] reference. Add custom source geometry for navigation mesh baking to this object.  
         *  - `node` - The [Node] that is parsed.  
         */
        static source_geometry_parser_set_callback(parser: RID, callback: Callable): void
        
        /** Returns a simplified version of [param path] with less critical path points removed. The simplification amount is in worlds units and controlled by [param epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        static simplify_path(path: PackedVector3Array | Vector3[], epsilon: float64): PackedVector3Array
        
        /** Destroys the given RID. */
        static free_rid(rid: RID): void
        
        /** Control activation of this server. */
        static set_active(active: boolean): void
        
        /** If `true` enables debug mode on the NavigationServer. */
        static set_debug_enabled(enabled: boolean): void
        
        /** Returns `true` when the NavigationServer has debug enabled. */
        static get_debug_enabled(): boolean
        
        /** Returns information about the current state of the NavigationServer. See [enum ProcessInfo] for a list of available states. */
        static get_process_info(process_info: NavigationServer3D.ProcessInfo): int64
        
        /** Emitted when a navigation map is updated, when a region moves or is modified. */
        static readonly map_changed: Signal1<RID>
        
        /** Emitted when navigation debug settings are changed. Only available in debug builds. */
        static readonly navigation_debug_changed: Signal0
        
        /** Emitted when avoidance debug settings are changed. Only available in debug builds. */
        static readonly avoidance_debug_changed: Signal0
    }
    // _singleton_class_: RenderingServer
    namespace RenderingServer {
        enum TextureLayeredType {
            /** Array of 2-dimensional textures (see [Texture2DArray]). */
            TEXTURE_LAYERED_2D_ARRAY = 0,
            
            /** Cubemap texture (see [Cubemap]). */
            TEXTURE_LAYERED_CUBEMAP = 1,
            
            /** Array of cubemap textures (see [CubemapArray]). */
            TEXTURE_LAYERED_CUBEMAP_ARRAY = 2,
        }
        enum CubeMapLayer {
            /** Left face of a [Cubemap]. */
            CUBEMAP_LAYER_LEFT = 0,
            
            /** Right face of a [Cubemap]. */
            CUBEMAP_LAYER_RIGHT = 1,
            
            /** Bottom face of a [Cubemap]. */
            CUBEMAP_LAYER_BOTTOM = 2,
            
            /** Top face of a [Cubemap]. */
            CUBEMAP_LAYER_TOP = 3,
            
            /** Front face of a [Cubemap]. */
            CUBEMAP_LAYER_FRONT = 4,
            
            /** Back face of a [Cubemap]. */
            CUBEMAP_LAYER_BACK = 5,
        }
        enum ShaderMode {
            /** Shader is a 3D shader. */
            SHADER_SPATIAL = 0,
            
            /** Shader is a 2D shader. */
            SHADER_CANVAS_ITEM = 1,
            
            /** Shader is a particle shader (can be used in both 2D and 3D). */
            SHADER_PARTICLES = 2,
            
            /** Shader is a 3D sky shader. */
            SHADER_SKY = 3,
            
            /** Shader is a 3D fog shader. */
            SHADER_FOG = 4,
            
            /** Represents the size of the [enum ShaderMode] enum. */
            SHADER_MAX = 5,
        }
        enum ArrayType {
            /** Array is a vertex position array. */
            ARRAY_VERTEX = 0,
            
            /** Array is a normal array. */
            ARRAY_NORMAL = 1,
            
            /** Array is a tangent array. */
            ARRAY_TANGENT = 2,
            
            /** Array is a vertex color array. */
            ARRAY_COLOR = 3,
            
            /** Array is a UV coordinates array. */
            ARRAY_TEX_UV = 4,
            
            /** Array is a UV coordinates array for the second set of UV coordinates. */
            ARRAY_TEX_UV2 = 5,
            
            /** Array is a custom data array for the first set of custom data. */
            ARRAY_CUSTOM0 = 6,
            
            /** Array is a custom data array for the second set of custom data. */
            ARRAY_CUSTOM1 = 7,
            
            /** Array is a custom data array for the third set of custom data. */
            ARRAY_CUSTOM2 = 8,
            
            /** Array is a custom data array for the fourth set of custom data. */
            ARRAY_CUSTOM3 = 9,
            
            /** Array contains bone information. */
            ARRAY_BONES = 10,
            
            /** Array is weight information. */
            ARRAY_WEIGHTS = 11,
            
            /** Array is an index array. */
            ARRAY_INDEX = 12,
            
            /** Represents the size of the [enum ArrayType] enum. */
            ARRAY_MAX = 13,
        }
        enum ArrayCustomFormat {
            /** Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, unsigned floating-point in the `[0.0, 1.0]` range. */
            ARRAY_CUSTOM_RGBA8_UNORM = 0,
            
            /** Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, signed floating-point in the `[-1.0, 1.0]` range. */
            ARRAY_CUSTOM_RGBA8_SNORM = 1,
            
            /** Custom data array contains 16-bit-per-channel red/green color data. Values are floating-point in half precision. */
            ARRAY_CUSTOM_RG_HALF = 2,
            
            /** Custom data array contains 16-bit-per-channel red/green/blue/alpha color data. Values are floating-point in half precision. */
            ARRAY_CUSTOM_RGBA_HALF = 3,
            
            /** Custom data array contains 32-bit-per-channel red color data. Values are floating-point in single precision. */
            ARRAY_CUSTOM_R_FLOAT = 4,
            
            /** Custom data array contains 32-bit-per-channel red/green color data. Values are floating-point in single precision. */
            ARRAY_CUSTOM_RG_FLOAT = 5,
            
            /** Custom data array contains 32-bit-per-channel red/green/blue color data. Values are floating-point in single precision. */
            ARRAY_CUSTOM_RGB_FLOAT = 6,
            
            /** Custom data array contains 32-bit-per-channel red/green/blue/alpha color data. Values are floating-point in single precision. */
            ARRAY_CUSTOM_RGBA_FLOAT = 7,
            
            /** Represents the size of the [enum ArrayCustomFormat] enum. */
            ARRAY_CUSTOM_MAX = 8,
        }
        enum ArrayFormat {
            /** Flag used to mark a vertex position array. */
            ARRAY_FORMAT_VERTEX = 1,
            
            /** Flag used to mark a normal array. */
            ARRAY_FORMAT_NORMAL = 2,
            
            /** Flag used to mark a tangent array. */
            ARRAY_FORMAT_TANGENT = 4,
            
            /** Flag used to mark a vertex color array. */
            ARRAY_FORMAT_COLOR = 8,
            
            /** Flag used to mark a UV coordinates array. */
            ARRAY_FORMAT_TEX_UV = 16,
            
            /** Flag used to mark a UV coordinates array for the second UV coordinates. */
            ARRAY_FORMAT_TEX_UV2 = 32,
            
            /** Flag used to mark an array of custom per-vertex data for the first set of custom data. */
            ARRAY_FORMAT_CUSTOM0 = 64,
            
            /** Flag used to mark an array of custom per-vertex data for the second set of custom data. */
            ARRAY_FORMAT_CUSTOM1 = 128,
            
            /** Flag used to mark an array of custom per-vertex data for the third set of custom data. */
            ARRAY_FORMAT_CUSTOM2 = 256,
            
            /** Flag used to mark an array of custom per-vertex data for the fourth set of custom data. */
            ARRAY_FORMAT_CUSTOM3 = 512,
            
            /** Flag used to mark a bone information array. */
            ARRAY_FORMAT_BONES = 1024,
            
            /** Flag used to mark a weights array. */
            ARRAY_FORMAT_WEIGHTS = 2048,
            
            /** Flag used to mark an index array. */
            ARRAY_FORMAT_INDEX = 4096,
            ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
            ARRAY_FORMAT_CUSTOM_BASE = 13,
            ARRAY_FORMAT_CUSTOM_BITS = 3,
            ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
            ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
            ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
            ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
            ARRAY_FORMAT_CUSTOM_MASK = 7,
            ARRAY_COMPRESS_FLAGS_BASE = 25,
            
            /** Flag used to mark that the array contains 2D vertices. */
            ARRAY_FLAG_USE_2D_VERTICES = 33554432,
            ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
            
            /** Flag used to mark that the array uses 8 bone weights instead of 4. */
            ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
            
            /** Flag used to mark that the mesh does not have a vertex array and instead will infer vertex positions in the shader using indices and other information. */
            ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
            
            /** Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can. */
            ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
            
            /** Flag used to mark the start of the bits used to store the mesh version. */
            ARRAY_FLAG_FORMAT_VERSION_BASE = 35,
            
            /** Flag used to shift a mesh format int to bring the version into the lowest digits. */
            ARRAY_FLAG_FORMAT_VERSION_SHIFT = 35,
            
            /** Flag used to record the format used by prior mesh versions before the introduction of a version. */
            ARRAY_FLAG_FORMAT_VERSION_1 = 0,
            
            /** Flag used to record the second iteration of the mesh version flag. The primary difference between this and [constant ARRAY_FLAG_FORMAT_VERSION_1] is that this version supports [constant ARRAY_FLAG_COMPRESS_ATTRIBUTES] and in this version vertex positions are de-interleaved from normals and tangents. */
            ARRAY_FLAG_FORMAT_VERSION_2 = 34359738368,
            
            /** Flag used to record the current version that the engine expects. Currently this is the same as [constant ARRAY_FLAG_FORMAT_VERSION_2]. */
            ARRAY_FLAG_FORMAT_CURRENT_VERSION = 34359738368,
            
            /** Flag used to isolate the bits used for mesh version after using [constant ARRAY_FLAG_FORMAT_VERSION_SHIFT] to shift them into place. */
            ARRAY_FLAG_FORMAT_VERSION_MASK = 255,
        }
        enum PrimitiveType {
            /** Primitive to draw consists of points. */
            PRIMITIVE_POINTS = 0,
            
            /** Primitive to draw consists of lines. */
            PRIMITIVE_LINES = 1,
            
            /** Primitive to draw consists of a line strip from start to end. */
            PRIMITIVE_LINE_STRIP = 2,
            
            /** Primitive to draw consists of triangles. */
            PRIMITIVE_TRIANGLES = 3,
            
            /** Primitive to draw consists of a triangle strip (the last 3 vertices are always combined to make a triangle). */
            PRIMITIVE_TRIANGLE_STRIP = 4,
            
            /** Represents the size of the [enum PrimitiveType] enum. */
            PRIMITIVE_MAX = 5,
        }
        enum BlendShapeMode {
            /** Blend shapes are normalized. */
            BLEND_SHAPE_MODE_NORMALIZED = 0,
            
            /** Blend shapes are relative to base weight. */
            BLEND_SHAPE_MODE_RELATIVE = 1,
        }
        enum MultimeshTransformFormat {
            /** Use [Transform2D] to store MultiMesh transform. */
            MULTIMESH_TRANSFORM_2D = 0,
            
            /** Use [Transform3D] to store MultiMesh transform. */
            MULTIMESH_TRANSFORM_3D = 1,
        }
        enum LightProjectorFilter {
            /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps. */
            LIGHT_PROJECTOR_FILTER_NEAREST = 0,
            
            /** Linear filter for light projectors (use for non-pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps. */
            LIGHT_PROJECTOR_FILTER_LINEAR = 1,
            
            /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
            LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS = 2,
            
            /** Linear filter for light projectors (use for non-pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
            LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS = 3,
            
            /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
            
            /** Linear filter for light projectors (use for non-pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5,
        }
        enum LightType {
            /** Directional (sun/moon) light (see [DirectionalLight3D]). */
            LIGHT_DIRECTIONAL = 0,
            
            /** Omni light (see [OmniLight3D]). */
            LIGHT_OMNI = 1,
            
            /** Spot light (see [SpotLight3D]). */
            LIGHT_SPOT = 2,
        }
        enum LightParam {
            /** The light's energy multiplier. */
            LIGHT_PARAM_ENERGY = 0,
            
            /** The light's indirect energy multiplier (final indirect energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_INDIRECT_ENERGY]). */
            LIGHT_PARAM_INDIRECT_ENERGY = 1,
            
            /** The light's volumetric fog energy multiplier (final volumetric fog energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY]). */
            LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY = 2,
            
            /** The light's influence on specularity. */
            LIGHT_PARAM_SPECULAR = 3,
            
            /** The light's range. */
            LIGHT_PARAM_RANGE = 4,
            
            /** The size of the light when using spot light or omni light. The angular size of the light when using directional light. */
            LIGHT_PARAM_SIZE = 5,
            
            /** The light's attenuation. */
            LIGHT_PARAM_ATTENUATION = 6,
            
            /** The spotlight's angle. */
            LIGHT_PARAM_SPOT_ANGLE = 7,
            
            /** The spotlight's attenuation. */
            LIGHT_PARAM_SPOT_ATTENUATION = 8,
            
            /** The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering). */
            LIGHT_PARAM_SHADOW_MAX_DISTANCE = 9,
            
            /** Proportion of shadow atlas occupied by the first split. */
            LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET = 10,
            
            /** Proportion of shadow atlas occupied by the second split. */
            LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET = 11,
            
            /** Proportion of shadow atlas occupied by the third split. The fourth split occupies the rest. */
            LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET = 12,
            
            /** Proportion of shadow max distance where the shadow will start to fade out. */
            LIGHT_PARAM_SHADOW_FADE_START = 13,
            
            /** Normal bias used to offset shadow lookup by object normal. Can be used to fix self-shadowing artifacts. */
            LIGHT_PARAM_SHADOW_NORMAL_BIAS = 14,
            
            /** Bias the shadow lookup to fix self-shadowing artifacts. */
            LIGHT_PARAM_SHADOW_BIAS = 15,
            
            /** Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect. */
            LIGHT_PARAM_SHADOW_PANCAKE_SIZE = 16,
            
            /** The light's shadow opacity. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost. */
            LIGHT_PARAM_SHADOW_OPACITY = 17,
            
            /** Blurs the edges of the shadow. Can be used to hide pixel artifacts in low resolution shadow maps. A high value can make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible. */
            LIGHT_PARAM_SHADOW_BLUR = 18,
            LIGHT_PARAM_TRANSMITTANCE_BIAS = 19,
            
            /** Constant representing the intensity of the light, measured in Lumens when dealing with a [SpotLight3D] or [OmniLight3D], or measured in Lux with a [DirectionalLight3D]. Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. */
            LIGHT_PARAM_INTENSITY = 20,
            
            /** Represents the size of the [enum LightParam] enum. */
            LIGHT_PARAM_MAX = 21,
        }
        enum LightBakeMode {
            /** Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights. */
            LIGHT_BAKE_DISABLED = 0,
            
            /** Light is taken into account in static baking ([VoxelGI], [LightmapGI], SDFGI ([member Environment.sdfgi_enabled])). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off. */
            LIGHT_BAKE_STATIC = 1,
            
            /** Light is taken into account in dynamic baking ([VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [constant LIGHT_BAKE_STATIC]. This has a greater performance cost compared to [constant LIGHT_BAKE_STATIC]. When using SDFGI, the update speed of dynamic lights is affected by [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
            LIGHT_BAKE_DYNAMIC = 2,
        }
        enum LightOmniShadowMode {
            /** Use a dual paraboloid shadow map for omni lights. */
            LIGHT_OMNI_SHADOW_DUAL_PARABOLOID = 0,
            
            /** Use a cubemap shadow map for omni lights. Slower but better quality than dual paraboloid. */
            LIGHT_OMNI_SHADOW_CUBE = 1,
        }
        enum LightDirectionalShadowMode {
            /** Use orthogonal shadow projection for directional light. */
            LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL = 0,
            
            /** Use 2 splits for shadow projection when using directional light. */
            LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS = 1,
            
            /** Use 4 splits for shadow projection when using directional light. */
            LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS = 2,
        }
        enum LightDirectionalSkyMode {
            /** Use DirectionalLight3D in both sky rendering and scene lighting. */
            LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY = 0,
            
            /** Only use DirectionalLight3D in scene lighting. */
            LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY = 1,
            
            /** Only use DirectionalLight3D in sky rendering. */
            LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY = 2,
        }
        enum ShadowQuality {
            /** Lowest shadow filtering quality (fastest). Soft shadows are not available with this quality setting, which means the [member Light3D.shadow_blur] property is ignored if [member Light3D.light_size] and [member Light3D.light_angular_distance] is `0.0`.  
             *      
             *  **Note:** The variable shadow blur performed by [member Light3D.light_size] and [member Light3D.light_angular_distance] is still effective when using hard shadow filtering. In this case, [member Light3D.shadow_blur]  *is*  taken into account. However, the results will not be blurred, instead the blur amount is treated as a maximum radius for the penumbra.  
             */
            SHADOW_QUALITY_HARD = 0,
            
            /** Very low shadow filtering quality (faster). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 0.75× to avoid introducing too much noise. This division only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
            SHADOW_QUALITY_SOFT_VERY_LOW = 1,
            
            /** Low shadow filtering quality (fast). */
            SHADOW_QUALITY_SOFT_LOW = 2,
            
            /** Medium low shadow filtering quality (average). */
            SHADOW_QUALITY_SOFT_MEDIUM = 3,
            
            /** High low shadow filtering quality (slow). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 1.5× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
            SHADOW_QUALITY_SOFT_HIGH = 4,
            
            /** Highest low shadow filtering quality (slowest). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 2× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
            SHADOW_QUALITY_SOFT_ULTRA = 5,
            
            /** Represents the size of the [enum ShadowQuality] enum. */
            SHADOW_QUALITY_MAX = 6,
        }
        enum ReflectionProbeUpdateMode {
            /** Reflection probe will update reflections once and then stop. */
            REFLECTION_PROBE_UPDATE_ONCE = 0,
            
            /** Reflection probe will update each frame. This mode is necessary to capture moving objects. */
            REFLECTION_PROBE_UPDATE_ALWAYS = 1,
        }
        enum ReflectionProbeAmbientMode {
            /** Do not apply any ambient lighting inside the reflection probe's box defined by its size. */
            REFLECTION_PROBE_AMBIENT_DISABLED = 0,
            
            /** Apply automatically-sourced environment lighting inside the reflection probe's box defined by its size. */
            REFLECTION_PROBE_AMBIENT_ENVIRONMENT = 1,
            
            /** Apply custom ambient lighting inside the reflection probe's box defined by its size. See [method reflection_probe_set_ambient_color] and [method reflection_probe_set_ambient_energy]. */
            REFLECTION_PROBE_AMBIENT_COLOR = 2,
        }
        enum DecalTexture {
            /** Albedo texture slot in a decal ([member Decal.texture_albedo]). */
            DECAL_TEXTURE_ALBEDO = 0,
            
            /** Normal map texture slot in a decal ([member Decal.texture_normal]). */
            DECAL_TEXTURE_NORMAL = 1,
            
            /** Occlusion/Roughness/Metallic texture slot in a decal ([member Decal.texture_orm]). */
            DECAL_TEXTURE_ORM = 2,
            
            /** Emission texture slot in a decal ([member Decal.texture_emission]). */
            DECAL_TEXTURE_EMISSION = 3,
            
            /** Represents the size of the [enum DecalTexture] enum. */
            DECAL_TEXTURE_MAX = 4,
        }
        enum DecalFilter {
            /** Nearest-neighbor filter for decals (use for pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps. */
            DECAL_FILTER_NEAREST = 0,
            
            /** Linear filter for decals (use for non-pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps. */
            DECAL_FILTER_LINEAR = 1,
            
            /** Nearest-neighbor filter for decals (use for pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
            DECAL_FILTER_NEAREST_MIPMAPS = 2,
            
            /** Linear filter for decals (use for non-pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
            DECAL_FILTER_LINEAR_MIPMAPS = 3,
            
            /** Nearest-neighbor filter for decals (use for pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
            
            /** Linear filter for decals (use for non-pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
            DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5,
        }
        enum VoxelGIQuality {
            /** Low [VoxelGI] rendering quality using 4 cones. */
            VOXEL_GI_QUALITY_LOW = 0,
            
            /** High [VoxelGI] rendering quality using 6 cones. */
            VOXEL_GI_QUALITY_HIGH = 1,
        }
        enum ParticlesMode {
            /** 2D particles. */
            PARTICLES_MODE_2D = 0,
            
            /** 3D particles. */
            PARTICLES_MODE_3D = 1,
        }
        enum ParticlesTransformAlign {
            PARTICLES_TRANSFORM_ALIGN_DISABLED = 0,
            PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD = 1,
            PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
            PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3,
        }
        enum ParticlesDrawOrder {
            /** Draw particles in the order that they appear in the particles array. */
            PARTICLES_DRAW_ORDER_INDEX = 0,
            
            /** Sort particles based on their lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
            PARTICLES_DRAW_ORDER_LIFETIME = 1,
            
            /** Sort particles based on the inverse of their lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
            PARTICLES_DRAW_ORDER_REVERSE_LIFETIME = 2,
            
            /** Sort particles based on their distance to the camera. */
            PARTICLES_DRAW_ORDER_VIEW_DEPTH = 3,
        }
        enum ParticlesCollisionType {
            PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT = 0,
            PARTICLES_COLLISION_TYPE_BOX_ATTRACT = 1,
            PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT = 2,
            PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE = 3,
            PARTICLES_COLLISION_TYPE_BOX_COLLIDE = 4,
            PARTICLES_COLLISION_TYPE_SDF_COLLIDE = 5,
            PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE = 6,
        }
        enum ParticlesCollisionHeightfieldResolution {
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256 = 0,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512 = 1,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024 = 2,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048 = 3,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096 = 4,
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192 = 5,
            
            /** Represents the size of the [enum ParticlesCollisionHeightfieldResolution] enum. */
            PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX = 6,
        }
        enum FogVolumeShape {
            /** [FogVolume] will be shaped like an ellipsoid (stretched sphere). */
            FOG_VOLUME_SHAPE_ELLIPSOID = 0,
            
            /** [FogVolume] will be shaped like a cone pointing upwards (in local coordinates). The cone's angle is set automatically to fill the size. The cone will be adjusted to fit within the size. Rotate the [FogVolume] node to reorient the cone. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead). */
            FOG_VOLUME_SHAPE_CONE = 1,
            
            /** [FogVolume] will be shaped like an upright cylinder (in local coordinates). Rotate the [FogVolume] node to reorient the cylinder. The cylinder will be adjusted to fit within the size. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead). */
            FOG_VOLUME_SHAPE_CYLINDER = 2,
            
            /** [FogVolume] will be shaped like a box. */
            FOG_VOLUME_SHAPE_BOX = 3,
            
            /** [FogVolume] will have no shape, will cover the whole world and will not be culled. */
            FOG_VOLUME_SHAPE_WORLD = 4,
            
            /** Represents the size of the [enum FogVolumeShape] enum. */
            FOG_VOLUME_SHAPE_MAX = 5,
        }
        enum ViewportScaling3DMode {
            /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
            VIEWPORT_SCALING_3D_MODE_BILINEAR = 0,
            
            /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
            VIEWPORT_SCALING_3D_MODE_FSR = 1,
            
            /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
            VIEWPORT_SCALING_3D_MODE_FSR2 = 2,
            
            /** Represents the size of the [enum ViewportScaling3DMode] enum. */
            VIEWPORT_SCALING_3D_MODE_MAX = 3,
        }
        enum ViewportUpdateMode {
            /** Do not update the viewport's render target. */
            VIEWPORT_UPDATE_DISABLED = 0,
            
            /** Update the viewport's render target once, then switch to [constant VIEWPORT_UPDATE_DISABLED]. */
            VIEWPORT_UPDATE_ONCE = 1,
            
            /** Update the viewport's render target only when it is visible. This is the default value. */
            VIEWPORT_UPDATE_WHEN_VISIBLE = 2,
            
            /** Update the viewport's render target only when its parent is visible. */
            VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE = 3,
            
            /** Always update the viewport's render target. */
            VIEWPORT_UPDATE_ALWAYS = 4,
        }
        enum ViewportClearMode {
            /** Always clear the viewport's render target before drawing. */
            VIEWPORT_CLEAR_ALWAYS = 0,
            
            /** Never clear the viewport's render target. */
            VIEWPORT_CLEAR_NEVER = 1,
            
            /** Clear the viewport's render target on the next frame, then switch to [constant VIEWPORT_CLEAR_NEVER]. */
            VIEWPORT_CLEAR_ONLY_NEXT_FRAME = 2,
        }
        enum ViewportEnvironmentMode {
            /** Disable rendering of 3D environment over 2D canvas. */
            VIEWPORT_ENVIRONMENT_DISABLED = 0,
            
            /** Enable rendering of 3D environment over 2D canvas. */
            VIEWPORT_ENVIRONMENT_ENABLED = 1,
            
            /** Inherit enable/disable value from parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then this has the same behavior as [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
            VIEWPORT_ENVIRONMENT_INHERIT = 2,
            
            /** Represents the size of the [enum ViewportEnvironmentMode] enum. */
            VIEWPORT_ENVIRONMENT_MAX = 3,
        }
        enum ViewportSDFOversize {
            /** Do not oversize the 2D signed distance field. Occluders may disappear when touching the viewport's edges, and [GPUParticles3D] collision may stop working earlier than intended. This has the lowest GPU requirements. */
            VIEWPORT_SDF_OVERSIZE_100_PERCENT = 0,
            
            /** 2D signed distance field covers 20% of the viewport's size outside the viewport on each side (top, right, bottom, left). */
            VIEWPORT_SDF_OVERSIZE_120_PERCENT = 1,
            
            /** 2D signed distance field covers 50% of the viewport's size outside the viewport on each side (top, right, bottom, left). */
            VIEWPORT_SDF_OVERSIZE_150_PERCENT = 2,
            
            /** 2D signed distance field covers 100% of the viewport's size outside the viewport on each side (top, right, bottom, left). This has the highest GPU requirements. */
            VIEWPORT_SDF_OVERSIZE_200_PERCENT = 3,
            
            /** Represents the size of the [enum ViewportSDFOversize] enum. */
            VIEWPORT_SDF_OVERSIZE_MAX = 4,
        }
        enum ViewportSDFScale {
            /** Full resolution 2D signed distance field scale. This has the highest GPU requirements. */
            VIEWPORT_SDF_SCALE_100_PERCENT = 0,
            
            /** Half resolution 2D signed distance field scale on each axis (25% of the viewport pixel count). */
            VIEWPORT_SDF_SCALE_50_PERCENT = 1,
            
            /** Quarter resolution 2D signed distance field scale on each axis (6.25% of the viewport pixel count). This has the lowest GPU requirements. */
            VIEWPORT_SDF_SCALE_25_PERCENT = 2,
            
            /** Represents the size of the [enum ViewportSDFScale] enum. */
            VIEWPORT_SDF_SCALE_MAX = 3,
        }
        enum ViewportMSAA {
            /** Multisample antialiasing for 3D is disabled. This is the default value, and also the fastest setting. */
            VIEWPORT_MSAA_DISABLED = 0,
            
            /** Multisample antialiasing uses 2 samples per pixel for 3D. This has a moderate impact on performance. */
            VIEWPORT_MSAA_2X = 1,
            
            /** Multisample antialiasing uses 4 samples per pixel for 3D. This has a high impact on performance. */
            VIEWPORT_MSAA_4X = 2,
            
            /** Multisample antialiasing uses 8 samples per pixel for 3D. This has a very high impact on performance. Likely unsupported on low-end and older hardware. */
            VIEWPORT_MSAA_8X = 3,
            
            /** Represents the size of the [enum ViewportMSAA] enum. */
            VIEWPORT_MSAA_MAX = 4,
        }
        enum ViewportScreenSpaceAA {
            /** Do not perform any antialiasing in the full screen post-process. */
            VIEWPORT_SCREEN_SPACE_AA_DISABLED = 0,
            
            /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
            VIEWPORT_SCREEN_SPACE_AA_FXAA = 1,
            
            /** Represents the size of the [enum ViewportScreenSpaceAA] enum. */
            VIEWPORT_SCREEN_SPACE_AA_MAX = 2,
        }
        enum ViewportOcclusionCullingBuildQuality {
            /** Low occlusion culling BVH build quality (as defined by Embree). Results in the lowest CPU usage, but least effective culling. */
            VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW = 0,
            
            /** Medium occlusion culling BVH build quality (as defined by Embree). */
            VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM = 1,
            
            /** High occlusion culling BVH build quality (as defined by Embree). Results in the highest CPU usage, but most effective culling. */
            VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH = 2,
        }
        enum ViewportRenderInfo {
            /** Number of objects drawn in a single frame. */
            VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME = 0,
            
            /** Number of points, lines, or triangles drawn in a single frame. */
            VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            
            /** Number of draw calls during this frame. */
            VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            
            /** Represents the size of the [enum ViewportRenderInfo] enum. */
            VIEWPORT_RENDER_INFO_MAX = 3,
        }
        enum ViewportRenderInfoType {
            /** Visible render pass (excluding shadows). */
            VIEWPORT_RENDER_INFO_TYPE_VISIBLE = 0,
            
            /** Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits. */
            VIEWPORT_RENDER_INFO_TYPE_SHADOW = 1,
            
            /** Canvas item rendering. This includes all 2D rendering. */
            VIEWPORT_RENDER_INFO_TYPE_CANVAS = 2,
            
            /** Represents the size of the [enum ViewportRenderInfoType] enum. */
            VIEWPORT_RENDER_INFO_TYPE_MAX = 3,
        }
        enum ViewportDebugDraw {
            /** Debug draw is disabled. Default setting. */
            VIEWPORT_DEBUG_DRAW_DISABLED = 0,
            
            /** Objects are displayed without light information. */
            VIEWPORT_DEBUG_DRAW_UNSHADED = 1,
            
            /** Objects are displayed with only light information. */
            VIEWPORT_DEBUG_DRAW_LIGHTING = 2,
            
            /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.  
             *      
             *  **Note:** When using this debug draw mode, custom shaders will be ignored. This means vertex displacement won't be visible anymore.  
             */
            VIEWPORT_DEBUG_DRAW_OVERDRAW = 3,
            
            /** Debug draw draws objects in wireframe. */
            VIEWPORT_DEBUG_DRAW_WIREFRAME = 4,
            
            /** Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects. */
            VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER = 5,
            
            /** Objects are displayed with only the albedo value from [VoxelGI]s. */
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            
            /** Objects are displayed with only the lighting value from [VoxelGI]s. */
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            
            /** Objects are displayed with only the emission color from [VoxelGI]s. */
            VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            
            /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
            VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS = 9,
            
            /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport].  
             *  The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for [constant VIEWPORT_DEBUG_DRAW_PSSM_SPLITS]. When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.  
             *  The last cascade shows all frustum slices to illustrate the coverage of all slices.  
             */
            VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            
            /** Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure. */
            VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE = 11,
            
            /** Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
            VIEWPORT_DEBUG_DRAW_SSAO = 12,
            
            /** Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
            VIEWPORT_DEBUG_DRAW_SSIL = 13,
            
            /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order they will be colored red, green, blue, yellow. */
            VIEWPORT_DEBUG_DRAW_PSSM_SPLITS = 14,
            
            /** Draws the decal atlas that stores decal textures from [Decal]s. */
            VIEWPORT_DEBUG_DRAW_DECAL_ATLAS = 15,
            
            /** Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections. */
            VIEWPORT_DEBUG_DRAW_SDFGI = 16,
            
            /** Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene. */
            VIEWPORT_DEBUG_DRAW_SDFGI_PROBES = 17,
            
            /** Draws the global illumination buffer ([VoxelGI] or SDFGI). */
            VIEWPORT_DEBUG_DRAW_GI_BUFFER = 18,
            
            /** Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance. */
            VIEWPORT_DEBUG_DRAW_DISABLE_LOD = 19,
            
            /** Draws the [OmniLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting. */
            VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            
            /** Draws the [SpotLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting. */
            VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            
            /** Draws the [Decal] cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals. */
            VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS = 22,
            
            /** Draws the [ReflectionProbe] cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes. */
            VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            
            /** Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects. */
            VIEWPORT_DEBUG_DRAW_OCCLUDERS = 24,
            
            /** Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay. */
            VIEWPORT_DEBUG_DRAW_MOTION_VECTORS = 25,
            
            /** Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects. */
            VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum ViewportVRSMode {
            /** Variable rate shading is disabled. */
            VIEWPORT_VRS_DISABLED = 0,
            
            /** Variable rate shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
            VIEWPORT_VRS_TEXTURE = 1,
            
            /** Variable rate shading texture is supplied by the primary [XRInterface]. Note that this may override the update mode. */
            VIEWPORT_VRS_XR = 2,
            
            /** Represents the size of the [enum ViewportVRSMode] enum. */
            VIEWPORT_VRS_MAX = 3,
        }
        enum ViewportVRSUpdateMode {
            /** The input texture for variable rate shading will not be processed. */
            VIEWPORT_VRS_UPDATE_DISABLED = 0,
            
            /** The input texture for variable rate shading will be processed once. */
            VIEWPORT_VRS_UPDATE_ONCE = 1,
            
            /** The input texture for variable rate shading will be processed each frame. */
            VIEWPORT_VRS_UPDATE_ALWAYS = 2,
            
            /** Represents the size of the [enum ViewportVRSUpdateMode] enum. */
            VIEWPORT_VRS_UPDATE_MAX = 3,
        }
        enum SkyMode {
            /** Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant SKY_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant SKY_MODE_INCREMENTAL]. Otherwise, this defaults to [constant SKY_MODE_QUALITY]. */
            SKY_MODE_AUTOMATIC = 0,
            
            /** Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant SKY_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples]. */
            SKY_MODE_QUALITY = 1,
            
            /** Uses the same high quality importance sampling to process the radiance map as [constant SKY_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly. */
            SKY_MODE_INCREMENTAL = 2,
            
            /** Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].  
             *      
             *  **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [method sky_set_radiance_size] must be set to `256`. Otherwise, a warning is printed and the overridden radiance size is ignored.  
             */
            SKY_MODE_REALTIME = 3,
        }
        enum CompositorEffectFlags {
            /** The rendering effect requires the color buffer to be resolved if MSAA is enabled. */
            COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR = 1,
            
            /** The rendering effect requires the depth buffer to be resolved if MSAA is enabled. */
            COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH = 2,
            
            /** The rendering effect requires motion vectors to be produced. */
            COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS = 4,
            
            /** The rendering effect requires normals and roughness g-buffer to be produced (Forward+ only). */
            COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS = 8,
            
            /** The rendering effect requires specular data to be separated out (Forward+ only). */
            COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR = 16,
        }
        enum CompositorEffectCallbackType {
            /** The callback is called before our opaque rendering pass, but after depth prepass (if applicable). */
            COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0,
            
            /** The callback is called after our opaque rendering pass, but before our sky is rendered. */
            COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1,
            
            /** The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections). */
            COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY = 2,
            
            /** The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers. */
            COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3,
            
            /** The callback is called after our transparent rendering pass, but before any build in post effects and output to our render target. */
            COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4,
            COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY = -1,
        }
        enum EnvironmentBG {
            /** Use the clear color as background. */
            ENV_BG_CLEAR_COLOR = 0,
            
            /** Use a specified color as the background. */
            ENV_BG_COLOR = 1,
            
            /** Use a sky resource for the background. */
            ENV_BG_SKY = 2,
            
            /** Use a specified canvas layer as the background. This can be useful for instantiating a 2D scene in a 3D world. */
            ENV_BG_CANVAS = 3,
            
            /** Do not clear the background, use whatever was rendered last frame as the background. */
            ENV_BG_KEEP = 4,
            
            /** Displays a camera feed in the background. */
            ENV_BG_CAMERA_FEED = 5,
            
            /** Represents the size of the [enum EnvironmentBG] enum. */
            ENV_BG_MAX = 6,
        }
        enum EnvironmentAmbientSource {
            /** Gather ambient light from whichever source is specified as the background. */
            ENV_AMBIENT_SOURCE_BG = 0,
            
            /** Disable ambient light. */
            ENV_AMBIENT_SOURCE_DISABLED = 1,
            
            /** Specify a specific [Color] for ambient light. */
            ENV_AMBIENT_SOURCE_COLOR = 2,
            
            /** Gather ambient light from the [Sky] regardless of what the background is. */
            ENV_AMBIENT_SOURCE_SKY = 3,
        }
        enum EnvironmentReflectionSource {
            /** Use the background for reflections. */
            ENV_REFLECTION_SOURCE_BG = 0,
            
            /** Disable reflections. */
            ENV_REFLECTION_SOURCE_DISABLED = 1,
            
            /** Use the [Sky] for reflections regardless of what the background is. */
            ENV_REFLECTION_SOURCE_SKY = 2,
        }
        enum EnvironmentGlowBlendMode {
            /** Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources. */
            ENV_GLOW_BLEND_MODE_ADDITIVE = 0,
            
            /** Screen glow blending mode. Increases brightness, used frequently with bloom. */
            ENV_GLOW_BLEND_MODE_SCREEN = 1,
            
            /** Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom). */
            ENV_GLOW_BLEND_MODE_SOFTLIGHT = 2,
            
            /** Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness. */
            ENV_GLOW_BLEND_MODE_REPLACE = 3,
            
            /** Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect. */
            ENV_GLOW_BLEND_MODE_MIX = 4,
        }
        enum EnvironmentFogMode {
            /** Use a physically-based fog model defined primarily by fog density. */
            ENV_FOG_MODE_EXPONENTIAL = 0,
            
            /** Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control. */
            ENV_FOG_MODE_DEPTH = 1,
        }
        enum EnvironmentToneMapper {
            /** Output color as they came in. This can cause bright lighting to look blown out, with noticeable clipping in the output colors. */
            ENV_TONE_MAPPER_LINEAR = 0,
            
            /** Use the Reinhard tonemapper. Performs a variation on rendered pixels' colors by this formula: `color = color / (1 + color)`. This avoids clipping bright highlights, but the resulting image can look a bit dull. */
            ENV_TONE_MAPPER_REINHARD = 1,
            
            /** Use the filmic tonemapper. This avoids clipping bright highlights, with a resulting image that usually looks more vivid than [constant ENV_TONE_MAPPER_REINHARD]. */
            ENV_TONE_MAPPER_FILMIC = 2,
            
            /** Use the Academy Color Encoding System tonemapper. ACES is slightly more expensive than other options, but it handles bright lighting in a more realistic fashion by desaturating it as it becomes brighter. ACES typically has a more contrasted output compared to [constant ENV_TONE_MAPPER_REINHARD] and [constant ENV_TONE_MAPPER_FILMIC].  
             *      
             *  **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.  
             */
            ENV_TONE_MAPPER_ACES = 3,
        }
        enum EnvironmentSSRRoughnessQuality {
            /** Lowest quality of roughness filter for screen-space reflections. Rough materials will not have blurrier screen-space reflections compared to smooth (non-rough) materials. This is the fastest option. */
            ENV_SSR_ROUGHNESS_QUALITY_DISABLED = 0,
            
            /** Low quality of roughness filter for screen-space reflections. */
            ENV_SSR_ROUGHNESS_QUALITY_LOW = 1,
            
            /** Medium quality of roughness filter for screen-space reflections. */
            ENV_SSR_ROUGHNESS_QUALITY_MEDIUM = 2,
            
            /** High quality of roughness filter for screen-space reflections. This is the slowest option. */
            ENV_SSR_ROUGHNESS_QUALITY_HIGH = 3,
        }
        enum EnvironmentSSAOQuality {
            /** Lowest quality of screen-space ambient occlusion. */
            ENV_SSAO_QUALITY_VERY_LOW = 0,
            
            /** Low quality screen-space ambient occlusion. */
            ENV_SSAO_QUALITY_LOW = 1,
            
            /** Medium quality screen-space ambient occlusion. */
            ENV_SSAO_QUALITY_MEDIUM = 2,
            
            /** High quality screen-space ambient occlusion. */
            ENV_SSAO_QUALITY_HIGH = 3,
            
            /** Highest quality screen-space ambient occlusion. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality. */
            ENV_SSAO_QUALITY_ULTRA = 4,
        }
        enum EnvironmentSSILQuality {
            /** Lowest quality of screen-space indirect lighting. */
            ENV_SSIL_QUALITY_VERY_LOW = 0,
            
            /** Low quality screen-space indirect lighting. */
            ENV_SSIL_QUALITY_LOW = 1,
            
            /** High quality screen-space indirect lighting. */
            ENV_SSIL_QUALITY_MEDIUM = 2,
            
            /** High quality screen-space indirect lighting. */
            ENV_SSIL_QUALITY_HIGH = 3,
            
            /** Highest quality screen-space indirect lighting. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality. */
            ENV_SSIL_QUALITY_ULTRA = 4,
        }
        enum EnvironmentSDFGIYScale {
            /** Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality. */
            ENV_SDFGI_Y_SCALE_50_PERCENT = 0,
            
            /** Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales. */
            ENV_SDFGI_Y_SCALE_75_PERCENT = 1,
            
            /** Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings. */
            ENV_SDFGI_Y_SCALE_100_PERCENT = 2,
        }
        enum EnvironmentSDFGIRayCount {
            /** Throw 4 rays per frame when converging SDFGI. This has the lowest GPU requirements, but creates the most noisy result. */
            ENV_SDFGI_RAY_COUNT_4 = 0,
            
            /** Throw 8 rays per frame when converging SDFGI. */
            ENV_SDFGI_RAY_COUNT_8 = 1,
            
            /** Throw 16 rays per frame when converging SDFGI. */
            ENV_SDFGI_RAY_COUNT_16 = 2,
            
            /** Throw 32 rays per frame when converging SDFGI. */
            ENV_SDFGI_RAY_COUNT_32 = 3,
            
            /** Throw 64 rays per frame when converging SDFGI. */
            ENV_SDFGI_RAY_COUNT_64 = 4,
            
            /** Throw 96 rays per frame when converging SDFGI. This has high GPU requirements. */
            ENV_SDFGI_RAY_COUNT_96 = 5,
            
            /** Throw 128 rays per frame when converging SDFGI. This has very high GPU requirements, but creates the least noisy result. */
            ENV_SDFGI_RAY_COUNT_128 = 6,
            
            /** Represents the size of the [enum EnvironmentSDFGIRayCount] enum. */
            ENV_SDFGI_RAY_COUNT_MAX = 7,
        }
        enum EnvironmentSDFGIFramesToConverge {
            /** Converge SDFGI over 5 frames. This is the most responsive, but creates the most noisy result with a given ray count. */
            ENV_SDFGI_CONVERGE_IN_5_FRAMES = 0,
            
            /** Configure SDFGI to fully converge over 10 frames. */
            ENV_SDFGI_CONVERGE_IN_10_FRAMES = 1,
            
            /** Configure SDFGI to fully converge over 15 frames. */
            ENV_SDFGI_CONVERGE_IN_15_FRAMES = 2,
            
            /** Configure SDFGI to fully converge over 20 frames. */
            ENV_SDFGI_CONVERGE_IN_20_FRAMES = 3,
            
            /** Configure SDFGI to fully converge over 25 frames. */
            ENV_SDFGI_CONVERGE_IN_25_FRAMES = 4,
            
            /** Configure SDFGI to fully converge over 30 frames. This is the least responsive, but creates the least noisy result with a given ray count. */
            ENV_SDFGI_CONVERGE_IN_30_FRAMES = 5,
            
            /** Represents the size of the [enum EnvironmentSDFGIFramesToConverge] enum. */
            ENV_SDFGI_CONVERGE_MAX = 6,
        }
        enum EnvironmentSDFGIFramesToUpdateLight {
            /** Update indirect light from dynamic lights in SDFGI over 1 frame. This is the most responsive, but has the highest GPU requirements. */
            ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME = 0,
            
            /** Update indirect light from dynamic lights in SDFGI over 2 frames. */
            ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES = 1,
            
            /** Update indirect light from dynamic lights in SDFGI over 4 frames. */
            ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES = 2,
            
            /** Update indirect light from dynamic lights in SDFGI over 8 frames. */
            ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES = 3,
            
            /** Update indirect light from dynamic lights in SDFGI over 16 frames. This is the least responsive, but has the lowest GPU requirements. */
            ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES = 4,
            
            /** Represents the size of the [enum EnvironmentSDFGIFramesToUpdateLight] enum. */
            ENV_SDFGI_UPDATE_LIGHT_MAX = 5,
        }
        enum SubSurfaceScatteringQuality {
            /** Disables subsurface scattering entirely, even on materials that have [member BaseMaterial3D.subsurf_scatter_enabled] set to `true`. This has the lowest GPU requirements. */
            SUB_SURFACE_SCATTERING_QUALITY_DISABLED = 0,
            
            /** Low subsurface scattering quality. */
            SUB_SURFACE_SCATTERING_QUALITY_LOW = 1,
            
            /** Medium subsurface scattering quality. */
            SUB_SURFACE_SCATTERING_QUALITY_MEDIUM = 2,
            
            /** High subsurface scattering quality. This has the highest GPU requirements. */
            SUB_SURFACE_SCATTERING_QUALITY_HIGH = 3,
        }
        enum DOFBokehShape {
            /** Calculate the DOF blur using a box filter. The fastest option, but results in obvious lines in blur pattern. */
            DOF_BOKEH_BOX = 0,
            
            /** Calculates DOF blur using a hexagon shaped filter. */
            DOF_BOKEH_HEXAGON = 1,
            
            /** Calculates DOF blur using a circle shaped filter. Best quality and most realistic, but slowest. Use only for areas where a lot of performance can be dedicated to post-processing (e.g. cutscenes). */
            DOF_BOKEH_CIRCLE = 2,
        }
        enum DOFBlurQuality {
            /** Lowest quality DOF blur. This is the fastest setting, but you may be able to see filtering artifacts. */
            DOF_BLUR_QUALITY_VERY_LOW = 0,
            
            /** Low quality DOF blur. */
            DOF_BLUR_QUALITY_LOW = 1,
            
            /** Medium quality DOF blur. */
            DOF_BLUR_QUALITY_MEDIUM = 2,
            
            /** Highest quality DOF blur. Results in the smoothest looking blur by taking the most samples, but is also significantly slower. */
            DOF_BLUR_QUALITY_HIGH = 3,
        }
        enum InstanceType {
            /** The instance does not have a type. */
            INSTANCE_NONE = 0,
            
            /** The instance is a mesh. */
            INSTANCE_MESH = 1,
            
            /** The instance is a multimesh. */
            INSTANCE_MULTIMESH = 2,
            
            /** The instance is a particle emitter. */
            INSTANCE_PARTICLES = 3,
            
            /** The instance is a GPUParticles collision shape. */
            INSTANCE_PARTICLES_COLLISION = 4,
            
            /** The instance is a light. */
            INSTANCE_LIGHT = 5,
            
            /** The instance is a reflection probe. */
            INSTANCE_REFLECTION_PROBE = 6,
            
            /** The instance is a decal. */
            INSTANCE_DECAL = 7,
            
            /** The instance is a VoxelGI. */
            INSTANCE_VOXEL_GI = 8,
            
            /** The instance is a lightmap. */
            INSTANCE_LIGHTMAP = 9,
            
            /** The instance is an occlusion culling occluder. */
            INSTANCE_OCCLUDER = 10,
            
            /** The instance is a visible on-screen notifier. */
            INSTANCE_VISIBLITY_NOTIFIER = 11,
            
            /** The instance is a fog volume. */
            INSTANCE_FOG_VOLUME = 12,
            
            /** Represents the size of the [enum InstanceType] enum. */
            INSTANCE_MAX = 13,
            
            /** A combination of the flags of geometry instances (mesh, multimesh, immediate and particles). */
            INSTANCE_GEOMETRY_MASK = 14,
        }
        enum InstanceFlags {
            /** Allows the instance to be used in baked lighting. */
            INSTANCE_FLAG_USE_BAKED_LIGHT = 0,
            
            /** Allows the instance to be used with dynamic global illumination. */
            INSTANCE_FLAG_USE_DYNAMIC_GI = 1,
            
            /** When set, manually requests to draw geometry on next frame. */
            INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE = 2,
            
            /** Always draw, even if the instance would be culled by occlusion culling. Does not affect view frustum culling. */
            INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING = 3,
            
            /** Represents the size of the [enum InstanceFlags] enum. */
            INSTANCE_FLAG_MAX = 4,
        }
        enum ShadowCastingSetting {
            /** Disable shadows from this instance. */
            SHADOW_CASTING_SETTING_OFF = 0,
            
            /** Cast shadows from this instance. */
            SHADOW_CASTING_SETTING_ON = 1,
            
            /** Disable backface culling when rendering the shadow of the object. This is slightly slower but may result in more correct shadows. */
            SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
            
            /** Only render the shadows from the object. The object itself will not be drawn. */
            SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3,
        }
        enum VisibilityRangeFadeMode {
            /** Disable visibility range fading for the given instance. */
            VISIBILITY_RANGE_FADE_DISABLED = 0,
            
            /** Fade-out the given instance when it approaches its visibility range limits. */
            VISIBILITY_RANGE_FADE_SELF = 1,
            
            /** Fade-in the given instance's dependencies when reaching its visibility range limits. */
            VISIBILITY_RANGE_FADE_DEPENDENCIES = 2,
        }
        enum BakeChannels {
            /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains albedo color in the `.rgb` channels and alpha in the `.a` channel. */
            BAKE_CHANNEL_ALBEDO_ALPHA = 0,
            
            /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains the per-pixel normal of the object in the `.rgb` channels and nothing in the `.a` channel. The per-pixel normal is encoded as `normal * 0.5 + 0.5`. */
            BAKE_CHANNEL_NORMAL = 1,
            
            /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains ambient occlusion (from material and decals only) in the `.r` channel, roughness in the `.g` channel, metallic in the `.b` channel and sub surface scattering amount in the `.a` channel. */
            BAKE_CHANNEL_ORM = 2,
            
            /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBAH] and contains emission color in the `.rgb` channels and nothing in the `.a` channel. */
            BAKE_CHANNEL_EMISSION = 3,
        }
        enum CanvasTextureChannel {
            /** Diffuse canvas texture ([member CanvasTexture.diffuse_texture]). */
            CANVAS_TEXTURE_CHANNEL_DIFFUSE = 0,
            
            /** Normal map canvas texture ([member CanvasTexture.normal_texture]). */
            CANVAS_TEXTURE_CHANNEL_NORMAL = 1,
            
            /** Specular map canvas texture ([member CanvasTexture.specular_texture]). */
            CANVAS_TEXTURE_CHANNEL_SPECULAR = 2,
        }
        enum NinePatchAxisMode {
            /** The nine patch gets stretched where needed. */
            NINE_PATCH_STRETCH = 0,
            
            /** The nine patch gets filled with tiles where needed. */
            NINE_PATCH_TILE = 1,
            
            /** The nine patch gets filled with tiles where needed and stretches them a bit if needed. */
            NINE_PATCH_TILE_FIT = 2,
        }
        enum CanvasItemTextureFilter {
            /** Uses the default filter mode for this [Viewport]. */
            CANVAS_ITEM_TEXTURE_FILTER_DEFAULT = 0,
            
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 1,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.  
             */
            CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.  
             */
            CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
            
            /** Max value for [enum CanvasItemTextureFilter] enum. */
            CANVAS_ITEM_TEXTURE_FILTER_MAX = 7,
        }
        enum CanvasItemTextureRepeat {
            /** Uses the default repeat mode for this [Viewport]. */
            CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT = 0,
            
            /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
            CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 1,
            
            /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
            CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 2,
            
            /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
            CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 3,
            
            /** Max value for [enum CanvasItemTextureRepeat] enum. */
            CANVAS_ITEM_TEXTURE_REPEAT_MAX = 4,
        }
        enum CanvasGroupMode {
            /** Child draws over parent and is not clipped. */
            CANVAS_GROUP_MODE_DISABLED = 0,
            
            /** Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn. */
            CANVAS_GROUP_MODE_CLIP_ONLY = 1,
            
            /** Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area. */
            CANVAS_GROUP_MODE_CLIP_AND_DRAW = 2,
            CANVAS_GROUP_MODE_TRANSPARENT = 3,
        }
        enum CanvasLightMode {
            /** 2D point light (see [PointLight2D]). */
            CANVAS_LIGHT_MODE_POINT = 0,
            
            /** 2D directional (sun/moon) light (see [DirectionalLight2D]). */
            CANVAS_LIGHT_MODE_DIRECTIONAL = 1,
        }
        enum CanvasLightBlendMode {
            /** Adds light color additive to the canvas. */
            CANVAS_LIGHT_BLEND_MODE_ADD = 0,
            
            /** Adds light color subtractive to the canvas. */
            CANVAS_LIGHT_BLEND_MODE_SUB = 1,
            
            /** The light adds color depending on transparency. */
            CANVAS_LIGHT_BLEND_MODE_MIX = 2,
        }
        enum CanvasLightShadowFilter {
            /** Do not apply a filter to canvas light shadows. */
            CANVAS_LIGHT_FILTER_NONE = 0,
            
            /** Use PCF5 filtering to filter canvas light shadows. */
            CANVAS_LIGHT_FILTER_PCF5 = 1,
            
            /** Use PCF13 filtering to filter canvas light shadows. */
            CANVAS_LIGHT_FILTER_PCF13 = 2,
            
            /** Max value of the [enum CanvasLightShadowFilter] enum. */
            CANVAS_LIGHT_FILTER_MAX = 3,
        }
        enum CanvasOccluderPolygonCullMode {
            /** Culling of the canvas occluder is disabled. */
            CANVAS_OCCLUDER_POLYGON_CULL_DISABLED = 0,
            
            /** Culling of the canvas occluder is clockwise. */
            CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE = 1,
            
            /** Culling of the canvas occluder is counterclockwise. */
            CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE = 2,
        }
        enum GlobalShaderParameterType {
            /** Boolean global shader parameter (`global uniform bool ...`). */
            GLOBAL_VAR_TYPE_BOOL = 0,
            
            /** 2-dimensional boolean vector global shader parameter (`global uniform bvec2 ...`). */
            GLOBAL_VAR_TYPE_BVEC2 = 1,
            
            /** 3-dimensional boolean vector global shader parameter (`global uniform bvec3 ...`). */
            GLOBAL_VAR_TYPE_BVEC3 = 2,
            
            /** 4-dimensional boolean vector global shader parameter (`global uniform bvec4 ...`). */
            GLOBAL_VAR_TYPE_BVEC4 = 3,
            
            /** Integer global shader parameter (`global uniform int ...`). */
            GLOBAL_VAR_TYPE_INT = 4,
            
            /** 2-dimensional integer vector global shader parameter (`global uniform ivec2 ...`). */
            GLOBAL_VAR_TYPE_IVEC2 = 5,
            
            /** 3-dimensional integer vector global shader parameter (`global uniform ivec3 ...`). */
            GLOBAL_VAR_TYPE_IVEC3 = 6,
            
            /** 4-dimensional integer vector global shader parameter (`global uniform ivec4 ...`). */
            GLOBAL_VAR_TYPE_IVEC4 = 7,
            
            /** 2-dimensional integer rectangle global shader parameter (`global uniform ivec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_IVEC4] in shader code, but exposed as a [Rect2i] in the editor UI. */
            GLOBAL_VAR_TYPE_RECT2I = 8,
            
            /** Unsigned integer global shader parameter (`global uniform uint ...`). */
            GLOBAL_VAR_TYPE_UINT = 9,
            
            /** 2-dimensional unsigned integer vector global shader parameter (`global uniform uvec2 ...`). */
            GLOBAL_VAR_TYPE_UVEC2 = 10,
            
            /** 3-dimensional unsigned integer vector global shader parameter (`global uniform uvec3 ...`). */
            GLOBAL_VAR_TYPE_UVEC3 = 11,
            
            /** 4-dimensional unsigned integer vector global shader parameter (`global uniform uvec4 ...`). */
            GLOBAL_VAR_TYPE_UVEC4 = 12,
            
            /** Single-precision floating-point global shader parameter (`global uniform float ...`). */
            GLOBAL_VAR_TYPE_FLOAT = 13,
            
            /** 2-dimensional floating-point vector global shader parameter (`global uniform vec2 ...`). */
            GLOBAL_VAR_TYPE_VEC2 = 14,
            
            /** 3-dimensional floating-point vector global shader parameter (`global uniform vec3 ...`). */
            GLOBAL_VAR_TYPE_VEC3 = 15,
            
            /** 4-dimensional floating-point vector global shader parameter (`global uniform vec4 ...`). */
            GLOBAL_VAR_TYPE_VEC4 = 16,
            
            /** Color global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Color] in the editor UI. */
            GLOBAL_VAR_TYPE_COLOR = 17,
            
            /** 2-dimensional floating-point rectangle global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Rect2] in the editor UI. */
            GLOBAL_VAR_TYPE_RECT2 = 18,
            
            /** 2×2 matrix global shader parameter (`global uniform mat2 ...`). Exposed as a [PackedInt32Array] in the editor UI. */
            GLOBAL_VAR_TYPE_MAT2 = 19,
            
            /** 3×3 matrix global shader parameter (`global uniform mat3 ...`). Exposed as a [Basis] in the editor UI. */
            GLOBAL_VAR_TYPE_MAT3 = 20,
            
            /** 4×4 matrix global shader parameter (`global uniform mat4 ...`). Exposed as a [Projection] in the editor UI. */
            GLOBAL_VAR_TYPE_MAT4 = 21,
            
            /** 2-dimensional transform global shader parameter (`global uniform mat2x3 ...`). Exposed as a [Transform2D] in the editor UI. */
            GLOBAL_VAR_TYPE_TRANSFORM_2D = 22,
            
            /** 3-dimensional transform global shader parameter (`global uniform mat3x4 ...`). Exposed as a [Transform3D] in the editor UI. */
            GLOBAL_VAR_TYPE_TRANSFORM = 23,
            
            /** 2D sampler global shader parameter (`global uniform sampler2D ...`). Exposed as a [Texture2D] in the editor UI. */
            GLOBAL_VAR_TYPE_SAMPLER2D = 24,
            
            /** 2D sampler array global shader parameter (`global uniform sampler2DArray ...`). Exposed as a [Texture2DArray] in the editor UI. */
            GLOBAL_VAR_TYPE_SAMPLER2DARRAY = 25,
            
            /** 3D sampler global shader parameter (`global uniform sampler3D ...`). Exposed as a [Texture3D] in the editor UI. */
            GLOBAL_VAR_TYPE_SAMPLER3D = 26,
            
            /** Cubemap sampler global shader parameter (`global uniform samplerCube ...`). Exposed as a [Cubemap] in the editor UI. */
            GLOBAL_VAR_TYPE_SAMPLERCUBE = 27,
            
            /** Represents the size of the [enum GlobalShaderParameterType] enum. */
            GLOBAL_VAR_TYPE_MAX = 28,
        }
        enum RenderingInfo {
            /** Number of objects rendered in the current 3D scene. This varies depending on camera position and rotation. */
            RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME = 0,
            
            /** Number of points, lines, or triangles rendered in the current 3D scene. This varies depending on camera position and rotation. */
            RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME = 1,
            
            /** Number of draw calls performed to render in the current 3D scene. This varies depending on camera position and rotation. */
            RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME = 2,
            
            /** Texture memory used (in bytes). */
            RENDERING_INFO_TEXTURE_MEM_USED = 3,
            
            /** Buffer memory used (in bytes). This includes vertex data, uniform buffers, and many miscellaneous buffer types used internally. */
            RENDERING_INFO_BUFFER_MEM_USED = 4,
            
            /** Video memory used (in bytes). When using the Forward+ or mobile rendering backends, this is always greater than the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED], since there is miscellaneous data not accounted for by those two metrics. When using the GL Compatibility backend, this is equal to the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED]. */
            RENDERING_INFO_VIDEO_MEM_USED = 5,
        }
    }
    /** Server for anything visible.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_renderingserver.html  
     */
    class RenderingServer extends Object {
        /** Marks an error that shows that the index array is empty. */
        static readonly NO_INDEX_ARRAY = -1
        
        /** Number of weights/bones per vertex. */
        static readonly ARRAY_WEIGHTS_SIZE = 4
        
        /** The minimum Z-layer for canvas items. */
        static readonly CANVAS_ITEM_Z_MIN = -4096
        
        /** The maximum Z-layer for canvas items. */
        static readonly CANVAS_ITEM_Z_MAX = 4096
        
        /** The maximum number of glow levels that can be used with the glow post-processing effect. */
        static readonly MAX_GLOW_LEVELS = 7
        static readonly MAX_CURSORS = 8
        
        /** The maximum number of directional lights that can be rendered at a given time in 2D. */
        static readonly MAX_2D_DIRECTIONAL_LIGHTS = 8
        
        /** The maximum number of surfaces a mesh can have. */
        static readonly MAX_MESH_SURFACES = 256
        
        /** The minimum renderpriority of all materials. */
        static readonly MATERIAL_RENDER_PRIORITY_MIN = -128
        
        /** The maximum renderpriority of all materials. */
        static readonly MATERIAL_RENDER_PRIORITY_MAX = 127
        
        /** The number of custom data arrays available ([constant ARRAY_CUSTOM0], [constant ARRAY_CUSTOM1], [constant ARRAY_CUSTOM2], [constant ARRAY_CUSTOM3]). */
        static readonly ARRAY_CUSTOM_COUNT = 4
        static readonly PARTICLES_EMIT_FLAG_POSITION = 1
        static readonly PARTICLES_EMIT_FLAG_ROTATION_SCALE = 2
        static readonly PARTICLES_EMIT_FLAG_VELOCITY = 4
        static readonly PARTICLES_EMIT_FLAG_COLOR = 8
        static readonly PARTICLES_EMIT_FLAG_CUSTOM = 16
        
        /** Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Texture2D].  
         *      
         *  **Note:** Not to be confused with [method RenderingDevice.texture_create], which creates the graphics API's own texture type as opposed to the Godot-specific [Texture2D] resource.  
         */
        static texture_2d_create(image: Image): RID
        
        /** Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [TextureLayered].  
         */
        static texture_2d_layered_create(layers: GArray, layered_type: RenderingServer.TextureLayeredType): RID
        
        /**     
         *  **Note:** The equivalent resource is [Texture3D].  
         */
        static texture_3d_create(format: Image.Format, width: int64, height: int64, depth: int64, mipmaps: boolean, data: GArray): RID
        
        /** This method does nothing and always returns an invalid [RID]. */
        static texture_proxy_create(base: RID): RID
        
        /** Updates the texture specified by the [param texture] [RID] with the data in [param image]. A [param layer] must also be specified, which should be `0` when updating a single-layer texture ([Texture2D]).  
         *      
         *  **Note:** The [param image] must have the same width, height and format as the current [param texture] data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use [method texture_replace] instead.  
         */
        static texture_2d_update(texture: RID, image: Image, layer: int64): void
        
        /** Updates the texture specified by the [param texture] [RID]'s data with the data in [param data]. All the texture's layers must be replaced at once.  
         *      
         *  **Note:** The [param texture] must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use [method texture_replace] instead.  
         */
        static texture_3d_update(texture: RID, data: GArray): void
        
        /** This method does nothing. */
        static texture_proxy_update(texture: RID, proxy_to: RID): void
        
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_layered_placeholder_create]  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTexture2D].  
         */
        static texture_2d_placeholder_create(): RID
        
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_placeholder_create].  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTextureLayered].  
         */
        static texture_2d_layered_placeholder_create(layered_type: RenderingServer.TextureLayeredType): RID
        
        /** Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_3d_*` RenderingServer functions, although it does nothing when used.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTexture3D].  
         */
        static texture_3d_placeholder_create(): RID
        
        /** Returns an [Image] instance from the given [param texture] [RID].  
         *  Example of getting the test texture from [method get_test_texture] and applying it to a [Sprite2D] node:  
         *    
         */
        static texture_2d_get(texture: RID): Image
        
        /** Returns an [Image] instance from the given [param texture] [RID] and [param layer]. */
        static texture_2d_layer_get(texture: RID, layer: int64): Image
        
        /** Returns 3D texture data as an array of [Image]s for the specified texture [RID]. */
        static texture_3d_get(texture: RID): GArray
        
        /** Replaces [param texture]'s texture data by the texture specified by the [param by_texture] RID, without changing [param texture]'s RID. */
        static texture_replace(texture: RID, by_texture: RID): void
        static texture_set_size_override(texture: RID, width: int64, height: int64): void
        static texture_set_path(texture: RID, path: string): void
        static texture_get_path(texture: RID): string
        
        /** Returns the format for the texture. */
        static texture_get_format(texture: RID): Image.Format
        static texture_set_force_redraw_if_visible(texture: RID, enable: boolean): void
        
        /** Creates a new texture object based on a texture created directly on the [RenderingDevice]. If the texture contains layers, [param layer_type] is used to define the layer type. */
        static texture_rd_create(rd_texture: RID, layer_type: RenderingServer.TextureLayeredType = 0): RID
        
        /** Returns a texture [RID] that can be used with [RenderingDevice]. */
        static texture_get_rd_texture(texture: RID, srgb: boolean = false): RID
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        static texture_get_native_handle(texture: RID, srgb: boolean = false): int64
        
        /** Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `shader_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Shader].  
         */
        static shader_create(): RID
        
        /** Sets the shader's source code (which triggers recompilation after being changed). */
        static shader_set_code(shader: RID, code: string): void
        
        /** Sets the path hint for the specified shader. This should generally match the [Shader] resource's [member Resource.resource_path]. */
        static shader_set_path_hint(shader: RID, path: string): void
        
        /** Returns a shader's source code as a string. */
        static shader_get_code(shader: RID): string
        
        /** Returns the parameters of a shader. */
        static get_shader_parameter_list(shader: RID): GArray
        
        /** Returns the default value for the specified shader uniform. This is usually the value written in the shader source code. */
        static shader_get_parameter_default(shader: RID, name: StringName): any
        
        /** Sets a shader's default texture. Overwrites the texture given by name.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        static shader_set_default_texture_parameter(shader: RID, name: StringName, texture: RID, index: int64 = 0): void
        
        /** Returns a default texture from a shader searched by name.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        static shader_get_default_texture_parameter(shader: RID, name: StringName, index: int64 = 0): RID
        
        /** Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `material_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Material].  
         */
        static material_create(): RID
        
        /** Sets a shader material's shader. */
        static material_set_shader(shader_material: RID, shader: RID): void
        
        /** Sets a material's parameter. */
        static material_set_param(material: RID, parameter: StringName, value: any): void
        
        /** Returns the value of a certain material's parameter. */
        static material_get_param(material: RID, parameter: StringName): any
        
        /** Sets a material's render priority. */
        static material_set_render_priority(material: RID, priority: int64): void
        
        /** Sets an object's next material. */
        static material_set_next_pass(material: RID, next_material: RID): void
        static mesh_create_from_surfaces(surfaces: GArray, blend_shape_count: int64 = 0): RID
        
        /** Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `mesh_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent resource is [Mesh].  
         */
        static mesh_create(): RID
        
        /** Returns the offset of a given attribute by [param array_index] in the start of its respective buffer. */
        static mesh_surface_get_format_offset(format: RenderingServer.ArrayFormat, vertex_count: int64, array_index: int64): int64
        
        /** Returns the stride of the vertex positions for a mesh with given [param format]. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents). */
        static mesh_surface_get_format_vertex_stride(format: RenderingServer.ArrayFormat, vertex_count: int64): int64
        
        /** Returns the stride of the combined normals and tangents for a mesh with given [param format]. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions. */
        static mesh_surface_get_format_normal_tangent_stride(format: RenderingServer.ArrayFormat, vertex_count: int64): int64
        
        /** Returns the stride of the attribute buffer for a mesh with given [param format]. */
        static mesh_surface_get_format_attribute_stride(format: RenderingServer.ArrayFormat, vertex_count: int64): int64
        
        /** Returns the stride of the skin buffer for a mesh with given [param format]. */
        static mesh_surface_get_format_skin_stride(format: RenderingServer.ArrayFormat, vertex_count: int64): int64
        static mesh_add_surface(mesh: RID, surface: GDictionary): void
        static mesh_add_surface_from_arrays(mesh: RID, primitive: RenderingServer.PrimitiveType, arrays: GArray, blend_shapes: GArray = [], lods: GDictionary = new GDictionary(), compress_format: RenderingServer.ArrayFormat = 0): void
        
        /** Returns a mesh's blend shape count. */
        static mesh_get_blend_shape_count(mesh: RID): int64
        
        /** Sets a mesh's blend shape mode. */
        static mesh_set_blend_shape_mode(mesh: RID, mode: RenderingServer.BlendShapeMode): void
        
        /** Returns a mesh's blend shape mode. */
        static mesh_get_blend_shape_mode(mesh: RID): RenderingServer.BlendShapeMode
        
        /** Sets a mesh's surface's material. */
        static mesh_surface_set_material(mesh: RID, surface: int64, material: RID): void
        
        /** Returns a mesh's surface's material. */
        static mesh_surface_get_material(mesh: RID, surface: int64): RID
        static mesh_get_surface(mesh: RID, surface: int64): GDictionary
        
        /** Returns a mesh's surface's buffer arrays. */
        static mesh_surface_get_arrays(mesh: RID, surface: int64): GArray
        
        /** Returns a mesh's surface's arrays for blend shapes. */
        static mesh_surface_get_blend_shape_arrays(mesh: RID, surface: int64): GArray
        
        /** Returns a mesh's number of surfaces. */
        static mesh_get_surface_count(mesh: RID): int64
        
        /** Sets a mesh's custom aabb. */
        static mesh_set_custom_aabb(mesh: RID, aabb: AABB): void
        
        /** Returns a mesh's custom aabb. */
        static mesh_get_custom_aabb(mesh: RID): AABB
        
        /** Removes all surfaces from a mesh. */
        static mesh_clear(mesh: RID): void
        static mesh_surface_update_vertex_region(mesh: RID, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static mesh_surface_update_attribute_region(mesh: RID, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static mesh_surface_update_skin_region(mesh: RID, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static mesh_set_shadow_mesh(mesh: RID, shadow_mesh: RID): void
        
        /** Creates a new multimesh on the RenderingServer and returns an [RID] handle. This RID will be used in all `multimesh_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this multimesh to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent resource is [MultiMesh].  
         */
        static multimesh_create(): RID
        static multimesh_allocate_data(multimesh: RID, instances: int64, transform_format: RenderingServer.MultimeshTransformFormat, color_format: boolean = false, custom_data_format: boolean = false): void
        
        /** Returns the number of instances allocated for this multimesh. */
        static multimesh_get_instance_count(multimesh: RID): int64
        
        /** Sets the mesh to be drawn by the multimesh. Equivalent to [member MultiMesh.mesh]. */
        static multimesh_set_mesh(multimesh: RID, mesh: RID): void
        
        /** Sets the [Transform3D] for this instance. Equivalent to [method MultiMesh.set_instance_transform]. */
        static multimesh_instance_set_transform(multimesh: RID, index: int64, transform: Transform3D): void
        
        /** Sets the [Transform2D] for this instance. For use when multimesh is used in 2D. Equivalent to [method MultiMesh.set_instance_transform_2d]. */
        static multimesh_instance_set_transform_2d(multimesh: RID, index: int64, transform: Transform2D): void
        
        /** Sets the color by which this instance will be modulated. Equivalent to [method MultiMesh.set_instance_color]. */
        static multimesh_instance_set_color(multimesh: RID, index: int64, color: Color): void
        
        /** Sets the custom data for this instance. Custom data is passed as a [Color], but is interpreted as a `vec4` in the shader. Equivalent to [method MultiMesh.set_instance_custom_data]. */
        static multimesh_instance_set_custom_data(multimesh: RID, index: int64, custom_data: Color): void
        
        /** Returns the RID of the mesh that will be used in drawing this multimesh. */
        static multimesh_get_mesh(multimesh: RID): RID
        
        /** Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh. */
        static multimesh_get_aabb(multimesh: RID): AABB
        
        /** Sets the custom AABB for this MultiMesh resource. */
        static multimesh_set_custom_aabb(multimesh: RID, aabb: AABB): void
        
        /** Returns the custom AABB defined for this MultiMesh resource. */
        static multimesh_get_custom_aabb(multimesh: RID): AABB
        
        /** Returns the [Transform3D] of the specified instance. */
        static multimesh_instance_get_transform(multimesh: RID, index: int64): Transform3D
        
        /** Returns the [Transform2D] of the specified instance. For use when the multimesh is set to use 2D transforms. */
        static multimesh_instance_get_transform_2d(multimesh: RID, index: int64): Transform2D
        
        /** Returns the color by which the specified instance will be modulated. */
        static multimesh_instance_get_color(multimesh: RID, index: int64): Color
        
        /** Returns the custom data associated with the specified instance. */
        static multimesh_instance_get_custom_data(multimesh: RID, index: int64): Color
        
        /** Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to [member MultiMesh.visible_instance_count]. */
        static multimesh_set_visible_instances(multimesh: RID, visible: int64): void
        
        /** Returns the number of visible instances for this multimesh. */
        static multimesh_get_visible_instances(multimesh: RID): int64
        
        /** Set the entire data to use for drawing the [param multimesh] at once to [param buffer] (such as instance transforms and colors). [param buffer]'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also [method multimesh_get_buffer].  
         *  The per-instance data size and expected data order is:  
         *  [codeblock lang=text]  
         *  2D:  
         *    - Position: 8 floats (8 floats for Transform2D)  
         *    - Position + Vertex color: 12 floats (8 floats for Transform2D, 4 floats for Color)  
         *    - Position + Custom data: 12 floats (8 floats for Transform2D, 4 floats of custom data)  
         *    - Position + Vertex color + Custom data: 16 floats (8 floats for Transform2D, 4 floats for Color, 4 floats of custom data)  
         *  3D:  
         *    - Position: 12 floats (12 floats for Transform3D)  
         *    - Position + Vertex color: 16 floats (12 floats for Transform3D, 4 floats for Color)  
         *    - Position + Custom data: 16 floats (12 floats for Transform3D, 4 floats of custom data)  
         *    - Position + Vertex color + Custom data: 20 floats (12 floats for Transform3D, 4 floats for Color, 4 floats of custom data)  
         *  [/codeblock]  
         */
        static multimesh_set_buffer(multimesh: RID, buffer: PackedFloat32Array | float32[]): void
        
        /** Returns the MultiMesh data (such as instance transforms, colors, etc.). See [method multimesh_set_buffer] for details on the returned data.  
         *      
         *  **Note:** If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means [method multimesh_get_buffer] is potentially a slow operation and should be avoided whenever possible.  
         */
        static multimesh_get_buffer(multimesh: RID): PackedFloat32Array
        
        /** Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `skeleton_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static skeleton_create(): RID
        static skeleton_allocate_data(skeleton: RID, bones: int64, is_2d_skeleton: boolean = false): void
        
        /** Returns the number of bones allocated for this skeleton. */
        static skeleton_get_bone_count(skeleton: RID): int64
        
        /** Sets the [Transform3D] for a specific bone of this skeleton. */
        static skeleton_bone_set_transform(skeleton: RID, bone: int64, transform: Transform3D): void
        
        /** Returns the [Transform3D] set for a specific bone of this skeleton. */
        static skeleton_bone_get_transform(skeleton: RID, bone: int64): Transform3D
        
        /** Sets the [Transform2D] for a specific bone of this skeleton. */
        static skeleton_bone_set_transform_2d(skeleton: RID, bone: int64, transform: Transform2D): void
        
        /** Returns the [Transform2D] set for a specific bone of this skeleton. */
        static skeleton_bone_get_transform_2d(skeleton: RID, bone: int64): Transform2D
        static skeleton_set_base_transform_2d(skeleton: RID, base_transform: Transform2D): void
        
        /** Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this directional light to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [DirectionalLight3D].  
         */
        static directional_light_create(): RID
        
        /** Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this omni light to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [OmniLight3D].  
         */
        static omni_light_create(): RID
        
        /** Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this spot light to an instance using [method instance_set_base] using the returned RID.  
         */
        static spot_light_create(): RID
        
        /** Sets the color of the light. Equivalent to [member Light3D.light_color]. */
        static light_set_color(light: RID, color: Color): void
        
        /** Sets the specified 3D light parameter. See [enum LightParam] for options. Equivalent to [method Light3D.set_param]. */
        static light_set_param(light: RID, param: RenderingServer.LightParam, value: float64): void
        
        /** If `true`, light will cast shadows. Equivalent to [member Light3D.shadow_enabled]. */
        static light_set_shadow(light: RID, enabled: boolean): void
        
        /** Sets the projector texture to use for the specified 3D light. Equivalent to [member Light3D.light_projector]. */
        static light_set_projector(light: RID, texture: RID): void
        
        /** If `true`, the 3D light will subtract light instead of adding light. Equivalent to [member Light3D.light_negative]. */
        static light_set_negative(light: RID, enable: boolean): void
        
        /** Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to [member Light3D.light_cull_mask]. */
        static light_set_cull_mask(light: RID, mask: int64): void
        
        /** Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to [member Light3D.distance_fade_enabled], [member Light3D.distance_fade_begin], [member Light3D.distance_fade_shadow], and [member Light3D.distance_fade_length]. */
        static light_set_distance_fade(decal: RID, enabled: boolean, begin: float64, shadow: float64, length: float64): void
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [method instance_geometry_set_cast_shadows_setting]. Equivalent to [member Light3D.shadow_reverse_cull_face]. */
        static light_set_reverse_cull_face_mode(light: RID, enabled: boolean): void
        
        /** Sets the bake mode to use for the specified 3D light. Equivalent to [member Light3D.light_bake_mode]. */
        static light_set_bake_mode(light: RID, bake_mode: RenderingServer.LightBakeMode): void
        
        /** Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera. */
        static light_set_max_sdfgi_cascade(light: RID, cascade: int64): void
        
        /** Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to [member OmniLight3D.omni_shadow_mode]. */
        static light_omni_set_shadow_mode(light: RID, mode: RenderingServer.LightOmniShadowMode): void
        
        /** Sets the shadow mode for this directional light. Equivalent to [member DirectionalLight3D.directional_shadow_mode]. See [enum LightDirectionalShadowMode] for options. */
        static light_directional_set_shadow_mode(light: RID, mode: RenderingServer.LightDirectionalShadowMode): void
        
        /** If `true`, this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to [member DirectionalLight3D.directional_shadow_blend_splits]. */
        static light_directional_set_blend_splits(light: RID, enable: boolean): void
        
        /** If `true`, this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon. */
        static light_directional_set_sky_mode(light: RID, mode: RenderingServer.LightDirectionalSkyMode): void
        
        /** Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis. */
        static light_projectors_set_filter(filter: RenderingServer.LightProjectorFilter): void
        
        /** Sets the filter quality for omni and spot light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static positional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        
        /** Sets the filter [param quality] for directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static directional_soft_shadow_filter_set_quality(quality: RenderingServer.ShadowQuality): void
        
        /** Sets the [param size] of the directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/size]. This parameter is global and cannot be set on a per-viewport basis. */
        static directional_shadow_atlas_set_size(size: int64, is_16bits: boolean): void
        
        /** Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `reflection_probe_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this reflection probe to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [ReflectionProbe].  
         */
        static reflection_probe_create(): RID
        
        /** Sets how often the reflection probe updates. Can either be once or every frame. See [enum ReflectionProbeUpdateMode] for options. */
        static reflection_probe_set_update_mode(probe: RID, mode: RenderingServer.ReflectionProbeUpdateMode): void
        
        /** Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to [member ReflectionProbe.intensity]. */
        static reflection_probe_set_intensity(probe: RID, intensity: float64): void
        
        /** Sets the reflection probe's ambient light mode. Equivalent to [member ReflectionProbe.ambient_mode]. */
        static reflection_probe_set_ambient_mode(probe: RID, mode: RenderingServer.ReflectionProbeAmbientMode): void
        
        /** Sets the reflection probe's custom ambient light color. Equivalent to [member ReflectionProbe.ambient_color]. */
        static reflection_probe_set_ambient_color(probe: RID, color: Color): void
        
        /** Sets the reflection probe's custom ambient light energy. Equivalent to [member ReflectionProbe.ambient_color_energy]. */
        static reflection_probe_set_ambient_energy(probe: RID, energy: float64): void
        
        /** Sets the max distance away from the probe an object can be before it is culled. Equivalent to [member ReflectionProbe.max_distance]. */
        static reflection_probe_set_max_distance(probe: RID, distance: float64): void
        
        /** Sets the size of the area that the reflection probe will capture. Equivalent to [member ReflectionProbe.size]. */
        static reflection_probe_set_size(probe: RID, size: Vector3): void
        
        /** Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to [member ReflectionProbe.origin_offset]. */
        static reflection_probe_set_origin_offset(probe: RID, offset: Vector3): void
        
        /** If `true`, reflections will ignore sky contribution. Equivalent to [member ReflectionProbe.interior]. */
        static reflection_probe_set_as_interior(probe: RID, enable: boolean): void
        
        /** If `true`, uses box projection. This can make reflections look more correct in certain situations. Equivalent to [member ReflectionProbe.box_projection]. */
        static reflection_probe_set_enable_box_projection(probe: RID, enable: boolean): void
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to [member ReflectionProbe.enable_shadows]. */
        static reflection_probe_set_enable_shadows(probe: RID, enable: boolean): void
        
        /** Sets the render cull mask for this reflection probe. Only instances with a matching layer will be reflected by this probe. Equivalent to [member ReflectionProbe.cull_mask]. */
        static reflection_probe_set_cull_mask(probe: RID, layers: int64): void
        
        /** Sets the render reflection mask for this reflection probe. Only instances with a matching layer will have reflections applied from this probe. Equivalent to [member ReflectionProbe.reflection_mask]. */
        static reflection_probe_set_reflection_mask(probe: RID, layers: int64): void
        
        /** Sets the resolution to use when rendering the specified reflection probe. The [param resolution] is specified for each cubemap face: for instance, specifying `512` will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels). */
        static reflection_probe_set_resolution(probe: RID, resolution: int64): void
        
        /** Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to [member ReflectionProbe.mesh_lod_threshold]. */
        static reflection_probe_set_mesh_lod_threshold(probe: RID, pixels: float64): void
        
        /** Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `decal_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this decal to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [Decal].  
         */
        static decal_create(): RID
        
        /** Sets the [param size] of the decal specified by the [param decal] RID. Equivalent to [member Decal.size]. */
        static decal_set_size(decal: RID, size: Vector3): void
        
        /** Sets the [param texture] in the given texture [param type] slot for the specified decal. Equivalent to [method Decal.set_texture]. */
        static decal_set_texture(decal: RID, type: RenderingServer.DecalTexture, texture: RID): void
        
        /** Sets the emission [param energy] in the decal specified by the [param decal] RID. Equivalent to [member Decal.emission_energy]. */
        static decal_set_emission_energy(decal: RID, energy: float64): void
        
        /** Sets the [param albedo_mix] in the decal specified by the [param decal] RID. Equivalent to [member Decal.albedo_mix]. */
        static decal_set_albedo_mix(decal: RID, albedo_mix: float64): void
        
        /** Sets the color multiplier in the decal specified by the [param decal] RID to [param color]. Equivalent to [member Decal.modulate]. */
        static decal_set_modulate(decal: RID, color: Color): void
        
        /** Sets the cull [param mask] in the decal specified by the [param decal] RID. Equivalent to [member Decal.cull_mask]. */
        static decal_set_cull_mask(decal: RID, mask: int64): void
        
        /** Sets the distance fade parameters in the decal specified by the [param decal] RID. Equivalent to [member Decal.distance_fade_enabled], [member Decal.distance_fade_begin] and [member Decal.distance_fade_length]. */
        static decal_set_distance_fade(decal: RID, enabled: boolean, begin: float64, length: float64): void
        
        /** Sets the upper fade ([param above]) and lower fade ([param below]) in the decal specified by the [param decal] RID. Equivalent to [member Decal.upper_fade] and [member Decal.lower_fade]. */
        static decal_set_fade(decal: RID, above: float64, below: float64): void
        
        /** Sets the normal [param fade] in the decal specified by the [param decal] RID. Equivalent to [member Decal.normal_fade]. */
        static decal_set_normal_fade(decal: RID, fade: float64): void
        
        /** Sets the texture [param filter] mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis. */
        static decals_set_filter(filter: RenderingServer.DecalFilter): void
        
        /** If [param half_resolution] is `true`, renders [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [LightmapGI] rendering is not affected by this setting. Equivalent to [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution]. */
        static gi_set_use_half_resolution(half_resolution: boolean): void
        
        /** Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `voxel_gi_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [VoxelGI].  
         */
        static voxel_gi_create(): RID
        static voxel_gi_allocate_data(voxel_gi: RID, to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3i, octree_cells: PackedByteArray | byte[] | ArrayBuffer, data_cells: PackedByteArray | byte[] | ArrayBuffer, distance_field: PackedByteArray | byte[] | ArrayBuffer, level_counts: PackedInt32Array | int32[]): void
        static voxel_gi_get_octree_size(voxel_gi: RID): Vector3i
        static voxel_gi_get_octree_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_data_cells(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_distance_field(voxel_gi: RID): PackedByteArray
        static voxel_gi_get_level_counts(voxel_gi: RID): PackedInt32Array
        static voxel_gi_get_to_cell_xform(voxel_gi: RID): Transform3D
        
        /** Sets the [member VoxelGIData.dynamic_range] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_dynamic_range(voxel_gi: RID, range: float64): void
        
        /** Sets the [member VoxelGIData.propagation] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_propagation(voxel_gi: RID, amount: float64): void
        
        /** Sets the [member VoxelGIData.energy] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_energy(voxel_gi: RID, energy: float64): void
        
        /** Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static voxel_gi_set_baked_exposure_normalization(voxel_gi: RID, baked_exposure: float64): void
        
        /** Sets the [member VoxelGIData.bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_bias(voxel_gi: RID, bias: float64): void
        
        /** Sets the [member VoxelGIData.normal_bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_normal_bias(voxel_gi: RID, bias: float64): void
        
        /** Sets the [member VoxelGIData.interior] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_interior(voxel_gi: RID, enable: boolean): void
        
        /** Sets the [member VoxelGIData.use_two_bounces] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxel_gi_set_use_two_bounces(voxel_gi: RID, enable: boolean): void
        
        /** Sets the [member ProjectSettings.rendering/global_illumination/voxel_gi/quality] value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis. */
        static voxel_gi_set_quality(quality: RenderingServer.VoxelGIQuality): void
        
        /** Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `lightmap_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [LightmapGI].  
         */
        static lightmap_create(): RID
        
        /** Set the textures on the given [param lightmap] GI instance to the texture array pointed to by the [param light] RID. If the lightmap texture was baked with [member LightmapGI.directional] set to `true`, then [param uses_sh] must also be `true`. */
        static lightmap_set_textures(lightmap: RID, light: RID, uses_sh: boolean): void
        static lightmap_set_probe_bounds(lightmap: RID, bounds: AABB): void
        static lightmap_set_probe_interior(lightmap: RID, interior: boolean): void
        static lightmap_set_probe_capture_data(lightmap: RID, points: PackedVector3Array | Vector3[], point_sh: PackedColorArray | Color[], tetrahedra: PackedInt32Array | int32[], bsp_tree: PackedInt32Array | int32[]): void
        static lightmap_get_probe_capture_points(lightmap: RID): PackedVector3Array
        static lightmap_get_probe_capture_sh(lightmap: RID): PackedColorArray
        static lightmap_get_probe_capture_tetrahedra(lightmap: RID): PackedInt32Array
        static lightmap_get_probe_capture_bsp_tree(lightmap: RID): PackedInt32Array
        
        /** Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static lightmap_set_baked_exposure_normalization(lightmap: RID, baked_exposure: float64): void
        static lightmap_set_probe_capture_update_speed(speed: float64): void
        
        /** Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `particles_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach these particles to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent nodes are [GPUParticles2D] and [GPUParticles3D].  
         *      
         *  **Note:** All `particles_*` methods only apply to GPU-based particles, not CPU-based particles. [CPUParticles2D] and [CPUParticles3D] do not have equivalent RenderingServer functions available, as these use [MultiMeshInstance2D] and [MultiMeshInstance3D] under the hood (see `multimesh_*` methods).  
         */
        static particles_create(): RID
        
        /** Sets whether the GPU particles specified by the [param particles] RID should be rendered in 2D or 3D according to [param mode]. */
        static particles_set_mode(particles: RID, mode: RenderingServer.ParticlesMode): void
        
        /** If `true`, particles will emit over time. Setting to false does not reset the particles, but only stops their emission. Equivalent to [member GPUParticles3D.emitting]. */
        static particles_set_emitting(particles: RID, emitting: boolean): void
        
        /** Returns `true` if particles are currently set to emitting. */
        static particles_get_emitting(particles: RID): boolean
        
        /** Sets the number of particles to be drawn and allocates the memory for them. Equivalent to [member GPUParticles3D.amount]. */
        static particles_set_amount(particles: RID, amount: int64): void
        
        /** Sets the amount ratio for particles to be emitted. Equivalent to [member GPUParticles3D.amount_ratio]. */
        static particles_set_amount_ratio(particles: RID, ratio: float64): void
        
        /** Sets the lifetime of each particle in the system. Equivalent to [member GPUParticles3D.lifetime]. */
        static particles_set_lifetime(particles: RID, lifetime: float64): void
        
        /** If `true`, particles will emit once and then stop. Equivalent to [member GPUParticles3D.one_shot]. */
        static particles_set_one_shot(particles: RID, one_shot: boolean): void
        
        /** Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to [member GPUParticles3D.preprocess]. */
        static particles_set_pre_process_time(particles: RID, time: float64): void
        
        /** Sets the explosiveness ratio. Equivalent to [member GPUParticles3D.explosiveness]. */
        static particles_set_explosiveness_ratio(particles: RID, ratio: float64): void
        
        /** Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to [member GPUParticles3D.randomness]. */
        static particles_set_randomness_ratio(particles: RID, ratio: float64): void
        
        /** Sets the value that informs a [ParticleProcessMaterial] to rush all particles towards the end of their lifetime. */
        static particles_set_interp_to_end(particles: RID, factor: float64): void
        
        /** Sets the velocity of a particle node, that will be used by [member ParticleProcessMaterial.inherit_velocity_ratio]. */
        static particles_set_emitter_velocity(particles: RID, velocity: Vector3): void
        
        /** Sets a custom axis-aligned bounding box for the particle system. Equivalent to [member GPUParticles3D.visibility_aabb]. */
        static particles_set_custom_aabb(particles: RID, aabb: AABB): void
        
        /** Sets the speed scale of the particle system. Equivalent to [member GPUParticles3D.speed_scale]. */
        static particles_set_speed_scale(particles: RID, scale: float64): void
        
        /** If `true`, particles use local coordinates. If `false` they use global coordinates. Equivalent to [member GPUParticles3D.local_coords]. */
        static particles_set_use_local_coordinates(particles: RID, enable: boolean): void
        
        /** Sets the material for processing the particles.  
         *      
         *  **Note:** This is not the material used to draw the materials. Equivalent to [member GPUParticles3D.process_material].  
         */
        static particles_set_process_material(particles: RID, material: RID): void
        
        /** Sets the frame rate that the particle system rendering will be fixed to. Equivalent to [member GPUParticles3D.fixed_fps]. */
        static particles_set_fixed_fps(particles: RID, fps: int64): void
        static particles_set_interpolate(particles: RID, enable: boolean): void
        
        /** If `true`, uses fractional delta which smooths the movement of the particles. Equivalent to [member GPUParticles3D.fract_delta]. */
        static particles_set_fractional_delta(particles: RID, enable: boolean): void
        static particles_set_collision_base_size(particles: RID, size: float64): void
        static particles_set_transform_align(particles: RID, align: RenderingServer.ParticlesTransformAlign): void
        
        /** If [param enable] is `true`, enables trails for the [param particles] with the specified [param length_sec] in seconds. Equivalent to [member GPUParticles3D.trail_enabled] and [member GPUParticles3D.trail_lifetime]. */
        static particles_set_trails(particles: RID, enable: boolean, length_sec: float64): void
        static particles_set_trail_bind_poses(particles: RID, bind_poses: GArray): void
        
        /** Returns `true` if particles are not emitting and particles are set to inactive. */
        static particles_is_inactive(particles: RID): boolean
        
        /** Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to [method instances_cull_aabb], [method instances_cull_convex], or [method instances_cull_ray]. */
        static particles_request_process(particles: RID): void
        
        /** Reset the particles on the next update. Equivalent to [method GPUParticles3D.restart]. */
        static particles_restart(particles: RID): void
        static particles_set_subemitter(particles: RID, subemitter_particles: RID): void
        
        /** Manually emits particles from the [param particles] instance. */
        static particles_emit(particles: RID, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emit_flags: int64): void
        
        /** Sets the draw order of the particles to one of the named enums from [enum ParticlesDrawOrder]. See [enum ParticlesDrawOrder] for options. Equivalent to [member GPUParticles3D.draw_order]. */
        static particles_set_draw_order(particles: RID, order: RenderingServer.ParticlesDrawOrder): void
        
        /** Sets the number of draw passes to use. Equivalent to [member GPUParticles3D.draw_passes]. */
        static particles_set_draw_passes(particles: RID, count: int64): void
        
        /** Sets the mesh to be used for the specified draw pass. Equivalent to [member GPUParticles3D.draw_pass_1], [member GPUParticles3D.draw_pass_2], [member GPUParticles3D.draw_pass_3], and [member GPUParticles3D.draw_pass_4]. */
        static particles_set_draw_pass_mesh(particles: RID, pass: int64, mesh: RID): void
        
        /** Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to [method GPUParticles3D.capture_aabb]. */
        static particles_get_current_aabb(particles: RID): AABB
        
        /** Sets the [Transform3D] that will be used by the particles when they first emit. */
        static particles_set_emission_transform(particles: RID, transform: Transform3D): void
        
        /** Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `particles_collision_*` RenderingServer functions.  
         *      
         *  **Note:** The equivalent nodes are [GPUParticlesCollision3D] and [GPUParticlesAttractor3D].  
         */
        static particles_collision_create(): RID
        
        /** Sets the collision or attractor shape [param type] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. */
        static particles_collision_set_collision_type(particles_collision: RID, type: RenderingServer.ParticlesCollisionType): void
        
        /** Sets the cull [param mask] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollision3D.cull_mask] or [member GPUParticlesAttractor3D.cull_mask] depending on the [param particles_collision] type. */
        static particles_collision_set_cull_mask(particles_collision: RID, mask: int64): void
        
        /** Sets the [param radius] for the 3D GPU particles sphere collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSphere3D.radius] or [member GPUParticlesAttractorSphere3D.radius] depending on the [param particles_collision] type. */
        static particles_collision_set_sphere_radius(particles_collision: RID, radius: float64): void
        
        /** Sets the [param extents] for the 3D GPU particles collision by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionBox3D.size], [member GPUParticlesCollisionSDF3D.size], [member GPUParticlesCollisionHeightField3D.size], [member GPUParticlesAttractorBox3D.size] or [member GPUParticlesAttractorVectorField3D.size] depending on the [param particles_collision] type. */
        static particles_collision_set_box_extents(particles_collision: RID, extents: Vector3): void
        
        /** Sets the [param strength] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.strength]. */
        static particles_collision_set_attractor_strength(particles_collision: RID, strength: float64): void
        
        /** Sets the directionality [param amount] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.directionality]. */
        static particles_collision_set_attractor_directionality(particles_collision: RID, amount: float64): void
        
        /** Sets the attenuation [param curve] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.attenuation]. */
        static particles_collision_set_attractor_attenuation(particles_collision: RID, curve: float64): void
        
        /** Sets the signed distance field [param texture] for the 3D GPU particles collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSDF3D.texture] or [member GPUParticlesAttractorVectorField3D.texture] depending on the [param particles_collision] type. */
        static particles_collision_set_field_texture(particles_collision: RID, texture: RID): void
        
        /** Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its [member GPUParticlesCollisionHeightField3D.update_mode]. */
        static particles_collision_height_field_update(particles_collision: RID): void
        
        /** Sets the heightmap [param resolution] for the 3D GPU particles heightfield collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionHeightField3D.resolution]. */
        static particles_collision_set_height_field_resolution(particles_collision: RID, resolution: RenderingServer.ParticlesCollisionHeightfieldResolution): void
        
        /** Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `fog_volume_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [FogVolume].  
         */
        static fog_volume_create(): RID
        
        /** Sets the shape of the fog volume to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        static fog_volume_set_shape(fog_volume: RID, shape: RenderingServer.FogVolumeShape): void
        
        /** Sets the size of the fog volume when shape is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX]. */
        static fog_volume_set_size(fog_volume: RID, size: Vector3): void
        
        /** Sets the [Material] of the fog volume. Can be either a [FogMaterial] or a custom [ShaderMaterial]. */
        static fog_volume_set_material(fog_volume: RID, material: RID): void
        
        /** Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `visibility_notifier_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [VisibleOnScreenNotifier3D].  
         */
        static visibility_notifier_create(): RID
        static visibility_notifier_set_aabb(notifier: RID, aabb: AABB): void
        static visibility_notifier_set_callbacks(notifier: RID, enter_callable: Callable, exit_callable: Callable): void
        
        /** Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `occluder_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Occluder3D] (not to be confused with the [OccluderInstance3D] node).  
         */
        static occluder_create(): RID
        
        /** Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed. */
        static occluder_set_mesh(occluder: RID, vertices: PackedVector3Array | Vector3[], indices: PackedInt32Array | int32[]): void
        
        /** Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Camera3D].  
         */
        static camera_create(): RID
        
        /** Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away. */
        static camera_set_perspective(camera: RID, fovy_degrees: float64, z_near: float64, z_far: float64): void
        
        /** Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
        static camera_set_orthogonal(camera: RID, size: float64, z_near: float64, z_far: float64): void
        
        /** Sets camera to use frustum projection. This mode allows adjusting the [param offset] argument to create "tilted frustum" effects. */
        static camera_set_frustum(camera: RID, size: float64, offset: Vector2, z_near: float64, z_far: float64): void
        
        /** Sets [Transform3D] of camera. */
        static camera_set_transform(camera: RID, transform: Transform3D): void
        
        /** Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to [member Camera3D.cull_mask]. */
        static camera_set_cull_mask(camera: RID, layers: int64): void
        
        /** Sets the environment used by this camera. Equivalent to [member Camera3D.environment]. */
        static camera_set_environment(camera: RID, env: RID): void
        
        /** Sets the camera_attributes created with [method camera_attributes_create] to the given camera. */
        static camera_set_camera_attributes(camera: RID, effects: RID): void
        
        /** Sets the compositor used by this camera. Equivalent to [member Camera3D.compositor]. */
        static camera_set_compositor(camera: RID, compositor: RID): void
        
        /** If `true`, preserves the horizontal aspect ratio which is equivalent to [constant Camera3D.KEEP_WIDTH]. If `false`, preserves the vertical aspect ratio which is equivalent to [constant Camera3D.KEEP_HEIGHT]. */
        static camera_set_use_vertical_aspect(camera: RID, enable: boolean): void
        
        /** Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `viewport_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Viewport].  
         */
        static viewport_create(): RID
        
        /** If `true`, the viewport uses augmented or virtual reality technologies. See [XRInterface]. */
        static viewport_set_use_xr(viewport: RID, use_xr: boolean): void
        
        /** Sets the viewport's width and height in pixels. */
        static viewport_set_size(viewport: RID, width: int64, height: int64): void
        
        /** If `true`, sets the viewport active, else sets it inactive. */
        static viewport_set_active(viewport: RID, active: boolean): void
        
        /** Sets the viewport's parent to the viewport specified by the [param parent_viewport] RID. */
        static viewport_set_parent_viewport(viewport: RID, parent_viewport: RID): void
        
        /** Copies the viewport to a region of the screen specified by [param rect]. If [method viewport_set_render_direct_to_screen] is `true`, then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.  
         *  For example, you can set the root viewport to not render at all with the following code:  
         *  FIXME: The method seems to be non-existent.  
         *    
         *  Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see [method viewport_set_render_direct_to_screen].  
         */
        static viewport_attach_to_screen(viewport: RID, rect: Rect2 = new Rect2(0, 0, 0, 0), screen: int64 = 0): void
        
        /** If `true`, render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size. */
        static viewport_set_render_direct_to_screen(viewport: RID, enabled: boolean): void
        
        /** Sets the rendering mask associated with this [Viewport]. Only [CanvasItem] nodes with a matching rendering visibility layer will be rendered by this [Viewport]. */
        static viewport_set_canvas_cull_mask(viewport: RID, canvas_cull_mask: int64): void
        
        /** Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible. */
        static viewport_set_scaling_3d_mode(viewport: RID, scaling_3d_mode: RenderingServer.ViewportScaling3DMode): void
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [enum ViewportScaling3DMode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [enum ViewportMSAA] for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         */
        static viewport_set_scaling_3d_scale(viewport: RID, scale: float64): void
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference. */
        static viewport_set_fsr_sharpness(viewport: RID, sharpness: float64): void
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between `-0.75` and `0.0`. Enabling temporal antialiasing ([member ProjectSettings.rendering/anti_aliasing/quality/use_taa]) can help reduce the graininess visible when using negative mipmap bias.  
         *      
         *  **Note:** When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `-log2(1.0 / scale) + mipmap_bias`.  
         */
        static viewport_set_texture_mipmap_bias(viewport: RID, mipmap_bias: float64): void
        
        /** Sets when the viewport should be updated. See [enum ViewportUpdateMode] constants for options. */
        static viewport_set_update_mode(viewport: RID, update_mode: RenderingServer.ViewportUpdateMode): void
        
        /** Returns the viewport's update mode. See [enum ViewportUpdateMode] constants for options.  
         *  **Warning:** Calling this from any thread other than the rendering thread will be detrimental to performance.  
         */
        static viewport_get_update_mode(viewport: RID): RenderingServer.ViewportUpdateMode
        
        /** Sets the clear mode of a viewport. See [enum ViewportClearMode] for options. */
        static viewport_set_clear_mode(viewport: RID, clear_mode: RenderingServer.ViewportClearMode): void
        
        /** Returns the render target for the viewport. */
        static viewport_get_render_target(viewport: RID): RID
        
        /** Returns the viewport's last rendered frame. */
        static viewport_get_texture(viewport: RID): RID
        
        /** If `true`, the viewport's 3D elements are not rendered. */
        static viewport_set_disable_3d(viewport: RID, disable: boolean): void
        
        /** If `true`, the viewport's canvas (i.e. 2D and GUI elements) is not rendered. */
        static viewport_set_disable_2d(viewport: RID, disable: boolean): void
        
        /** Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is [constant ENV_BG_CANVAS]. The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then the behavior will be the same as if it was set to [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
        static viewport_set_environment_mode(viewport: RID, mode: RenderingServer.ViewportEnvironmentMode): void
        
        /** Sets a viewport's camera. */
        static viewport_attach_camera(viewport: RID, camera: RID): void
        
        /** Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc. */
        static viewport_set_scenario(viewport: RID, scenario: RID): void
        
        /** Sets a viewport's canvas. */
        static viewport_attach_canvas(viewport: RID, canvas: RID): void
        
        /** Detaches a viewport from a canvas. */
        static viewport_remove_canvas(viewport: RID, canvas: RID): void
        
        /** If `true`, canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel]. */
        static viewport_set_snap_2d_transforms_to_pixel(viewport: RID, enabled: boolean): void
        
        /** If `true`, canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel]. */
        static viewport_set_snap_2d_vertices_to_pixel(viewport: RID, enabled: boolean): void
        
        /** Sets the default texture filtering mode for the specified [param viewport] RID. See [enum CanvasItemTextureFilter] for options. */
        static viewport_set_default_canvas_item_texture_filter(viewport: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the default texture repeat mode for the specified [param viewport] RID. See [enum CanvasItemTextureRepeat] for options. */
        static viewport_set_default_canvas_item_texture_repeat(viewport: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Sets the transformation of a viewport's canvas. */
        static viewport_set_canvas_transform(viewport: RID, canvas: RID, offset: Transform2D): void
        
        /** Sets the stacking order for a viewport's canvas.  
         *  [param layer] is the actual canvas layer, while [param sublayer] specifies the stacking order of the canvas among those in the same layer.  
         */
        static viewport_set_canvas_stacking(viewport: RID, canvas: RID, layer: int64, sublayer: int64): void
        
        /** If `true`, the viewport renders its background as transparent. */
        static viewport_set_transparent_background(viewport: RID, enabled: boolean): void
        
        /** Sets the viewport's global transformation matrix. */
        static viewport_set_global_canvas_transform(viewport: RID, transform: Transform2D): void
        
        /** Sets the viewport's 2D signed distance field [member ProjectSettings.rendering/2d/sdf/oversize] and [member ProjectSettings.rendering/2d/sdf/scale]. This is used when sampling the signed distance field in [CanvasItem] shaders as well as [GPUParticles2D] collision. This is  *not*  used by SDFGI in 3D rendering. */
        static viewport_set_sdf_oversize_and_scale(viewport: RID, oversize: RenderingServer.ViewportSDFOversize, scale: RenderingServer.ViewportSDFScale): void
        
        /** Sets the [param size] of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the [param viewport] RID. The value is rounded up to the nearest power of 2. If [param use_16_bits] is `true`, use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        static viewport_set_positional_shadow_atlas_size(viewport: RID, size: int64, use_16_bits: boolean = false): void
        
        /** Sets the number of subdivisions to use in the specified shadow atlas [param quadrant] for omni and spot shadows. See also [method Viewport.set_positional_shadow_atlas_quadrant_subdiv]. */
        static viewport_set_positional_shadow_atlas_quadrant_subdivision(viewport: RID, quadrant: int64, subdivision: int64): void
        
        /** Sets the multisample anti-aliasing mode for 3D on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
        static viewport_set_msaa_3d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        
        /** Sets the multisample anti-aliasing mode for 2D/Canvas on the specified [param viewport] RID. See [enum ViewportMSAA] for options. */
        static viewport_set_msaa_2d(viewport: RID, msaa: RenderingServer.ViewportMSAA): void
        
        /** If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as [member Viewport.use_hdr_2d].  
         *      
         *  **Note:** This setting will have no effect when using the GL Compatibility renderer as the GL Compatibility renderer always renders in low dynamic range for performance reasons.  
         */
        static viewport_set_use_hdr_2d(viewport: RID, enabled: boolean): void
        
        /** Sets the viewport's screen-space antialiasing mode. */
        static viewport_set_screen_space_aa(viewport: RID, mode: RenderingServer.ViewportScreenSpaceAA): void
        
        /** If `true`, use Temporal Anti-Aliasing. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_taa]. */
        static viewport_set_use_taa(viewport: RID, enable: boolean): void
        
        /** If `true`, enables debanding on the specified viewport. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding]. */
        static viewport_set_use_debanding(viewport: RID, enable: boolean): void
        
        /** If `true`, enables occlusion culling on the specified viewport. Equivalent to [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling]. */
        static viewport_set_use_occlusion_culling(viewport: RID, enable: boolean): void
        
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewport_set_occlusion_rays_per_thread(rays_per_thread: int64): void
        
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/bvh_build_quality] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewport_set_occlusion_culling_build_quality(quality: RenderingServer.ViewportOcclusionCullingBuildQuality): void
        
        /** Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass [param type]s, each of them having the same [param info]s you can query (different passes will return different values). See [enum RenderingServer.ViewportRenderInfoType] for a list of render pass types and [enum RenderingServer.ViewportRenderInfo] for a list of information that can be queried.  
         *  See also [method get_rendering_info], which returns global information across all viewports.  
         *      
         *  **Note:** Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method viewport_get_render_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:  
         *    
         */
        static viewport_get_render_info(viewport: RID, type: RenderingServer.ViewportRenderInfoType, info: RenderingServer.ViewportRenderInfo): int64
        
        /** Sets the debug draw mode of a viewport. See [enum ViewportDebugDraw] for options. */
        static viewport_set_debug_draw(viewport: RID, draw: RenderingServer.ViewportDebugDraw): void
        
        /** Sets the measurement for the given [param viewport] RID (obtained using [method Viewport.get_viewport_rid]). Once enabled, [method viewport_get_measured_render_time_cpu] and [method viewport_get_measured_render_time_gpu] will return values greater than `0.0` when queried with the given [param viewport]. */
        static viewport_set_measure_render_time(viewport: RID, enable: boolean): void
        
        /** Returns the CPU time taken to render the last frame in milliseconds. This  *only*  includes time spent in rendering-related operations; scripts' `_process` functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus [method get_frame_setup_time_cpu]. Unlike [method Engine.get_frames_per_second], this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].  
         *      
         *  **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.  
         */
        static viewport_get_measured_render_time_cpu(viewport: RID): float64
        
        /** Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike [method Engine.get_frames_per_second], this method accurately reflects GPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].  
         *      
         *  **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.  
         *      
         *  **Note:** When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using [method viewport_get_measured_render_time_gpu]. This behavior can be overridden in the graphics driver settings at the cost of higher power usage.  
         */
        static viewport_get_measured_render_time_gpu(viewport: RID): float64
        
        /** Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to [member ProjectSettings.rendering/vrs/mode]. */
        static viewport_set_vrs_mode(viewport: RID, mode: RenderingServer.ViewportVRSMode): void
        
        /** Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.  
         *  If set to [constant RenderingServer.VIEWPORT_VRS_UPDATE_ONCE], the input texture is copied once and the mode is changed to [constant RenderingServer.VIEWPORT_VRS_UPDATE_DISABLED].  
         */
        static viewport_set_vrs_update_mode(viewport: RID, mode: RenderingServer.ViewportVRSUpdateMode): void
        
        /** The texture to use when the VRS mode is set to [constant RenderingServer.VIEWPORT_VRS_TEXTURE]. Equivalent to [member ProjectSettings.rendering/vrs/texture]. */
        static viewport_set_vrs_texture(viewport: RID, texture: RID): void
        
        /** Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `sky_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static sky_create(): RID
        
        /** Sets the [param radiance_size] of the sky specified by the [param sky] RID (in pixels). Equivalent to [member Sky.radiance_size]. */
        static sky_set_radiance_size(sky: RID, radiance_size: int64): void
        
        /** Sets the process [param mode] of the sky specified by the [param sky] RID. Equivalent to [member Sky.process_mode]. */
        static sky_set_mode(sky: RID, mode: RenderingServer.SkyMode): void
        
        /** Sets the material that the sky uses to render the background, ambient and reflection maps. */
        static sky_set_material(sky: RID, material: RID): void
        
        /** Generates and returns an [Image] containing the radiance map for the specified [param sky] RID. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method environment_bake_panorama].  
         *      
         *  **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. [param energy] values above `1.0` can be used to brighten the resulting image.  
         *      
         *  **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.  
         */
        static sky_bake_panorama(sky: RID, energy: float64, bake_irradiance: boolean, size: Vector2i): Image
        
        /** Creates a new rendering effect and adds it to the RenderingServer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static compositor_effect_create(): RID
        
        /** Enables/disables this rendering effect. */
        static compositor_effect_set_enabled(effect: RID, enabled: boolean): void
        
        /** Sets the callback type ([param callback_type]) and callback method([param callback]) for this rendering effect. */
        static compositor_effect_set_callback(effect: RID, callback_type: RenderingServer.CompositorEffectCallbackType, callback: Callable): void
        
        /** Sets the flag ([param flag]) for this rendering effect to `true` or `false` ([param set]). */
        static compositor_effect_set_flag(effect: RID, flag: RenderingServer.CompositorEffectFlags, set: boolean): void
        
        /** Creates a new compositor and adds it to the RenderingServer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static compositor_create(): RID
        
        /** Sets the compositor effects for the specified compositor RID. [param effects] should be an array containing RIDs created with [method compositor_effect_create]. */
        static compositor_set_compositor_effects(compositor: RID, effects: GArray): void
        
        /** Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `environment_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Environment].  
         */
        static environment_create(): RID
        
        /** Sets the environment's background mode. Equivalent to [member Environment.background_mode]. */
        static environment_set_background(env: RID, bg: RenderingServer.EnvironmentBG): void
        
        /** Sets the [Sky] to be used as the environment's background when using  *BGMode*  sky. Equivalent to [member Environment.sky]. */
        static environment_set_sky(env: RID, sky: RID): void
        
        /** Sets a custom field of view for the background [Sky]. Equivalent to [member Environment.sky_custom_fov]. */
        static environment_set_sky_custom_fov(env: RID, scale: float64): void
        
        /** Sets the rotation of the background [Sky] expressed as a [Basis]. Equivalent to [member Environment.sky_rotation], where the rotation vector is used to construct the [Basis]. */
        static environment_set_sky_orientation(env: RID, orientation: Basis): void
        
        /** Color displayed for clear areas of the scene. Only effective if using the [constant ENV_BG_COLOR] background mode. */
        static environment_set_bg_color(env: RID, color: Color): void
        
        /** Sets the intensity of the background color. */
        static environment_set_bg_energy(env: RID, multiplier: float64, exposure_value: float64): void
        
        /** Sets the maximum layer to use if using Canvas background mode. */
        static environment_set_canvas_max_layer(env: RID, max_layer: int64): void
        
        /** Sets the values to be used for ambient light rendering. See [Environment] for more details. */
        static environment_set_ambient_light(env: RID, color: Color, ambient: RenderingServer.EnvironmentAmbientSource = 0, energy: float64 = 1, sky_contibution: float64 = 0, reflection_source: RenderingServer.EnvironmentReflectionSource = 0): void
        
        /** Configures glow for the specified environment RID. See `glow_*` properties in [Environment] for more information. */
        static environment_set_glow(env: RID, enable: boolean, levels: PackedFloat32Array | float32[], intensity: float64, strength: float64, mix: float64, bloom_threshold: float64, blend_mode: RenderingServer.EnvironmentGlowBlendMode, hdr_bleed_threshold: float64, hdr_bleed_scale: float64, hdr_luminance_cap: float64, glow_map_strength: float64, glow_map: RID): void
        
        /** Sets the variables to be used with the "tonemap" post-process effect. See [Environment] for more details. */
        static environment_set_tonemap(env: RID, tone_mapper: RenderingServer.EnvironmentToneMapper, exposure: float64, white: float64): void
        
        /** Sets the values to be used with the "adjustments" post-process effect. See [Environment] for more details. */
        static environment_set_adjustment(env: RID, enable: boolean, brightness: float64, contrast: float64, saturation: float64, use_1d_color_correction: boolean, color_correction: RID): void
        
        /** Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See [Environment] for more details. */
        static environment_set_ssr(env: RID, enable: boolean, max_steps: int64, fade_in: float64, fade_out: float64, depth_tolerance: float64): void
        
        /** Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environment_set_ssao(env: RID, enable: boolean, radius: float64, intensity: float64, power: float64, detail: float64, horizon: float64, sharpness: float64, light_affect: float64, ao_channel_affect: float64): void
        
        /** Configures fog for the specified environment RID. See `fog_*` properties in [Environment] for more information. */
        static environment_set_fog(env: RID, enable: boolean, light_color: Color, light_energy: float64, sun_scatter: float64, density: float64, height: float64, height_density: float64, aerial_perspective: float64, sky_affect: float64, fog_mode: RenderingServer.EnvironmentFogMode = 0): void
        
        /** Configures signed distance field global illumination for the specified environment RID. See `sdfgi_*` properties in [Environment] for more information. */
        static environment_set_sdfgi(env: RID, enable: boolean, cascades: int64, min_cell_size: float64, y_scale: RenderingServer.EnvironmentSDFGIYScale, use_occlusion: boolean, bounce_feedback: float64, read_sky: boolean, energy: float64, normal_bias: float64, probe_bias: float64): void
        
        /** Sets the variables to be used with the volumetric fog post-process effect. See [Environment] for more details. */
        static environment_set_volumetric_fog(env: RID, enable: boolean, density: float64, albedo: Color, emission: Color, emission_energy: float64, anisotropy: float64, length: float64, p_detail_spread: float64, gi_inject: float64, temporal_reprojection: boolean, temporal_reprojection_amount: float64, ambient_inject: float64, sky_affect: float64): void
        
        /** If [param enable] is `true`, enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to [member ProjectSettings.rendering/environment/glow/upscale_mode]. */
        static environment_glow_set_use_bicubic_upscale(enable: boolean): void
        static environment_set_ssr_roughness_quality(quality: RenderingServer.EnvironmentSSRRoughnessQuality): void
        
        /** Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environment_set_ssao_quality(quality: RenderingServer.EnvironmentSSAOQuality, half_size: boolean, adaptive_target: float64, blur_passes: int64, fadeout_from: float64, fadeout_to: float64): void
        
        /** Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See [Environment] for more details. */
        static environment_set_ssil_quality(quality: RenderingServer.EnvironmentSSILQuality, half_size: boolean, adaptive_target: float64, blur_passes: int64, fadeout_from: float64, fadeout_to: float64): void
        
        /** Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count]. */
        static environment_set_sdfgi_ray_count(ray_count: RenderingServer.EnvironmentSDFGIRayCount): void
        
        /** Sets the number of frames to use for converging signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge]. */
        static environment_set_sdfgi_frames_to_converge(frames: RenderingServer.EnvironmentSDFGIFramesToConverge): void
        
        /** Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
        static environment_set_sdfgi_frames_to_update_light(frames: RenderingServer.EnvironmentSDFGIFramesToUpdateLight): void
        
        /** Sets the resolution of the volumetric fog's froxel buffer. [param size] is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While [param depth] is directly used to set the depth of the buffer. */
        static environment_set_volumetric_fog_volume_size(size: int64, depth: int64): void
        
        /** Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts. */
        static environment_set_volumetric_fog_filter_active(active: boolean): void
        
        /** Generates and returns an [Image] containing the radiance map for the specified [param environment] RID's sky. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method sky_bake_panorama].  
         *      
         *  **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.  
         *      
         *  **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.  
         */
        static environment_bake_panorama(environment: RID, bake_irradiance: boolean, size: Vector2i): Image
        
        /** Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled], [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount] and [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit]. */
        static screen_space_roughness_limiter_set_active(enable: boolean, amount: float64, limit: float64): void
        
        /** Sets [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality] to use when rendering materials that have subsurface scattering enabled. */
        static sub_surface_scattering_set_quality(quality: RenderingServer.SubSurfaceScatteringQuality): void
        
        /** Sets the [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale] and [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale] to use when rendering materials that have subsurface scattering enabled. */
        static sub_surface_scattering_set_scale(scale: float64, depth_scale: float64): void
        
        /** Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_attributes_` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [CameraAttributes].  
         */
        static camera_attributes_create(): RID
        
        /** Sets the quality level of the DOF blur effect to one of the options in [enum DOFBlurQuality]. [param use_jitter] can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy. */
        static camera_attributes_set_dof_blur_quality(quality: RenderingServer.DOFBlurQuality, use_jitter: boolean): void
        
        /** Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see [enum DOFBokehShape]. */
        static camera_attributes_set_dof_blur_bokeh_shape(shape: RenderingServer.DOFBokehShape): void
        
        /** Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in [CameraAttributesPractical]. */
        static camera_attributes_set_dof_blur(camera_attributes: RID, far_enable: boolean, far_distance: float64, far_transition: float64, near_enable: boolean, near_distance: float64, near_transition: float64, amount: float64): void
        
        /** Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.  
         *  The normalization factor can be calculated from exposure value (EV100) as follows:  
         *    
         *  The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:  
         *    
         */
        static camera_attributes_set_exposure(camera_attributes: RID, multiplier: float64, normalization: float64): void
        
        /** Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in [CameraAttributes] and [CameraAttributesPractical]. */
        static camera_attributes_set_auto_exposure(camera_attributes: RID, enable: boolean, min_sensitivity: float64, max_sensitivity: float64, speed: float64, scale: float64): void
        
        /** Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `scenario_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  The scenario is the 3D world that all the visual instances exist in.  
         */
        static scenario_create(): RID
        
        /** Sets the environment that will be used with this scenario. See also [Environment]. */
        static scenario_set_environment(scenario: RID, environment: RID): void
        
        /** Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment. */
        static scenario_set_fallback_environment(scenario: RID, environment: RID): void
        
        /** Sets the camera attributes ([param effects]) that will be used with this scenario. See also [CameraAttributes]. */
        static scenario_set_camera_attributes(scenario: RID, effects: RID): void
        
        /** Sets the compositor ([param compositor]) that will be used with this scenario. See also [Compositor]. */
        static scenario_set_compositor(scenario: RID, compositor: RID): void
        
        /** Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. This is a shorthand for using [method instance_create] and setting the base and scenario manually.  
         */
        static instance_create2(base: RID, scenario: RID): RID
        
        /** Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using [method instance_set_base].  
         *      
         *  **Note:** The equivalent node is [VisualInstance3D].  
         */
        static instance_create(): RID
        
        /** Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario. */
        static instance_set_base(instance: RID, base: RID): void
        
        /** Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in. */
        static instance_set_scenario(instance: RID, scenario: RID): void
        
        /** Sets the render layers that this instance will be drawn to. Equivalent to [member VisualInstance3D.layers]. */
        static instance_set_layer_mask(instance: RID, mask: int64): void
        
        /** Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting. */
        static instance_set_pivot_data(instance: RID, sorting_offset: float64, use_aabb_center: boolean): void
        
        /** Sets the world space transform of the instance. Equivalent to [member Node3D.global_transform]. */
        static instance_set_transform(instance: RID, transform: Transform3D): void
        
        /** Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with [method instances_cull_aabb], [method instances_cull_convex], and [method instances_cull_ray]. */
        static instance_attach_object_instance_id(instance: RID, id: int64): void
        
        /** Sets the weight for a given blend shape associated with this instance. */
        static instance_set_blend_shape_weight(instance: RID, shape: int64, weight: float64): void
        
        /** Sets the override material of a specific surface. Equivalent to [method MeshInstance3D.set_surface_override_material]. */
        static instance_set_surface_override_material(instance: RID, surface: int64, material: RID): void
        
        /** Sets whether an instance is drawn or not. Equivalent to [member Node3D.visible]. */
        static instance_set_visible(instance: RID, visible: boolean): void
        
        /** Sets the transparency for the given geometry instance. Equivalent to [member GeometryInstance3D.transparency].  
         *  A transparency of `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [param transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [param transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         */
        static instance_geometry_set_transparency(instance: RID, transparency: float64): void
        
        /** Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting [member GeometryInstance3D.custom_aabb]. */
        static instance_set_custom_aabb(instance: RID, aabb: AABB): void
        
        /** Attaches a skeleton to an instance. Removes the previous skeleton from the instance. */
        static instance_attach_skeleton(instance: RID, skeleton: RID): void
        
        /** Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to [member GeometryInstance3D.extra_cull_margin]. */
        static instance_set_extra_visibility_margin(instance: RID, margin: float64): void
        
        /** Sets the visibility parent for the given instance. Equivalent to [member Node3D.visibility_parent]. */
        static instance_set_visibility_parent(instance: RID, parent: RID): void
        
        /** If `true`, ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as [member GeometryInstance3D.ignore_occlusion_culling], which only ignores occlusion culling and leaves frustum culling intact. */
        static instance_set_ignore_culling(instance: RID, enabled: boolean): void
        
        /** Sets the flag for a given [enum InstanceFlags]. See [enum InstanceFlags] for more details. */
        static instance_geometry_set_flag(instance: RID, flag: RenderingServer.InstanceFlags, enabled: boolean): void
        
        /** Sets the shadow casting setting to one of [enum ShadowCastingSetting]. Equivalent to [member GeometryInstance3D.cast_shadow]. */
        static instance_geometry_set_cast_shadows_setting(instance: RID, shadow_casting_setting: RenderingServer.ShadowCastingSetting): void
        
        /** Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_override]. */
        static instance_geometry_set_material_override(instance: RID, material: RID): void
        
        /** Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_overlay]. */
        static instance_geometry_set_material_overlay(instance: RID, material: RID): void
        
        /** Sets the visibility range values for the given geometry instance. Equivalent to [member GeometryInstance3D.visibility_range_begin] and related properties. */
        static instance_geometry_set_visibility_range(instance: RID, min: float64, max: float64, min_margin: float64, max_margin: float64, fade_mode: RenderingServer.VisibilityRangeFadeMode): void
        
        /** Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to [member GeometryInstance3D.gi_lightmap_scale]) and lightmap atlas slice must also be specified. */
        static instance_geometry_set_lightmap(instance: RID, lightmap: RID, lightmap_uv_scale: Rect2, lightmap_slice: int64): void
        
        /** Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to [member GeometryInstance3D.lod_bias]. */
        static instance_geometry_set_lod_bias(instance: RID, lod_bias: float64): void
        
        /** Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.set_instance_shader_parameter]. */
        static instance_geometry_set_shader_parameter(instance: RID, parameter: StringName, value: any): void
        
        /** Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter].  
         *      
         *  **Note:** Per-instance shader parameter names are case-sensitive.  
         */
        static instance_geometry_get_shader_parameter(instance: RID, parameter: StringName): any
        
        /** Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instance_geometry_get_shader_parameter_default_value(instance: RID, parameter: StringName): any
        
        /** Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string` and `usage`. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instance_geometry_get_shader_parameter_list(instance: RID): GArray
        
        /** Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instances_cull_aabb(aabb: AABB, scenario: RID = new RID()): PackedInt64Array
        
        /** Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instances_cull_ray(from: Vector3, to: Vector3, scenario: RID = new RID()): PackedInt64Array
        
        /** Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instances_cull_convex(convex: GArray, scenario: RID = new RID()): PackedInt64Array
        
        /** Bakes the material data of the Mesh passed in the [param base] parameter with optional [param material_overrides] to a set of [Image]s of size [param image_size]. Returns an array of [Image]s containing material properties as specified in [enum BakeChannels]. */
        static bake_render_uv2(base: RID, material_overrides: GArray, image_size: Vector2i): GArray
        
        /** Creates a canvas and returns the assigned [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  Canvas has no [Resource] or [Node] equivalent.  
         */
        static canvas_create(): RID
        
        /** A copy of the canvas item will be drawn with a local offset of the [param mirroring].  
         *      
         *  **Note:** This is equivalent to calling [method canvas_set_item_repeat] like `canvas_set_item_repeat(item, mirroring, 1)`, with an additional check ensuring [param canvas] is a parent of [param item].  
         */
        static canvas_set_item_mirroring(canvas: RID, item: RID, mirroring: Vector2): void
        
        /** A copy of the canvas item will be drawn with a local offset of the [param repeat_size] by the number of times of the [param repeat_times]. As the [param repeat_times] increases, the copies will spread away from the origin texture. */
        static canvas_set_item_repeat(item: RID, repeat_size: Vector2, repeat_times: int64): void
        
        /** Modulates all colors in the given canvas. */
        static canvas_set_modulate(canvas: RID, color: Color): void
        static canvas_set_disable_scale(disable: boolean): void
        
        /** Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_texture_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. See also [method texture_2d_create].  
         *      
         *  **Note:** The equivalent resource is [CanvasTexture] and is only meant to be used in 2D rendering, not 3D.  
         */
        static canvas_texture_create(): RID
        
        /** Sets the [param channel]'s [param texture] for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.diffuse_texture], [member CanvasTexture.normal_texture] and [member CanvasTexture.specular_texture]. */
        static canvas_texture_set_channel(canvas_texture: RID, channel: RenderingServer.CanvasTextureChannel, texture: RID): void
        
        /** Sets the [param base_color] and [param shininess] to use for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.specular_color] and [member CanvasTexture.specular_shininess]. */
        static canvas_texture_set_shading_parameters(canvas_texture: RID, base_color: Color, shininess: float64): void
        
        /** Sets the texture [param filter] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvas_texture_set_texture_filter(canvas_texture: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the texture [param repeat] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvas_texture_set_texture_repeat(canvas_texture: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Creates a new CanvasItem instance and returns its [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_item_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [CanvasItem].  
         */
        static canvas_item_create(): RID
        
        /** Sets a parent [CanvasItem] to the [CanvasItem]. The item will inherit transform, modulation and visibility from its parent, like [CanvasItem] nodes in the scene tree. */
        static canvas_item_set_parent(item: RID, parent: RID): void
        
        /** Sets the default texture filter mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_filter]. */
        static canvas_item_set_default_texture_filter(item: RID, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the default texture repeat mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_repeat]. */
        static canvas_item_set_default_texture_repeat(item: RID, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Sets the visibility of the [CanvasItem]. */
        static canvas_item_set_visible(item: RID, visible: boolean): void
        
        /** Sets the light [param mask] for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.light_mask]. */
        static canvas_item_set_light_mask(item: RID, mask: int64): void
        
        /** Sets the rendering visibility layer associated with this [CanvasItem]. Only [Viewport] nodes with a matching rendering mask will render this [CanvasItem]. */
        static canvas_item_set_visibility_layer(item: RID, visibility_layer: int64): void
        
        /** Sets the [param transform] of the canvas item specified by the [param item] RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to [member Node2D.transform]. */
        static canvas_item_set_transform(item: RID, transform: Transform2D): void
        
        /** If [param clip] is `true`, makes the canvas item specified by the [param item] RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use [method canvas_item_set_canvas_group_mode] instead.  
         *      
         *  **Note:** The equivalent node functionality is found in [member Label.clip_text], [RichTextLabel] (always enabled) and more.  
         */
        static canvas_item_set_clip(item: RID, clip: boolean): void
        
        /** If [param enabled] is `true`, enables multichannel signed distance field rendering mode for the canvas item specified by the [param item] RID. This is meant to be used for font rendering, or with specially generated images using [url=https://github.com/Chlumsky/msdfgen]msdfgen[/url]. */
        static canvas_item_set_distance_field_mode(item: RID, enabled: boolean): void
        
        /** If [param use_custom_rect] is `true`, sets the custom visibility rectangle (used for culling) to [param rect] for the canvas item specified by [param item]. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If [param use_custom_rect] is `false`, automatically computes a visibility rectangle based on the canvas item's draw commands. */
        static canvas_item_set_custom_rect(item: RID, use_custom_rect: boolean, rect: Rect2 = new Rect2(0, 0, 0, 0)): void
        
        /** Multiplies the color of the canvas item specified by the [param item] RID, while affecting its children. See also [method canvas_item_set_self_modulate]. Equivalent to [member CanvasItem.modulate]. */
        static canvas_item_set_modulate(item: RID, color: Color): void
        
        /** Multiplies the color of the canvas item specified by the [param item] RID, without affecting its children. See also [method canvas_item_set_modulate]. Equivalent to [member CanvasItem.self_modulate]. */
        static canvas_item_set_self_modulate(item: RID, color: Color): void
        
        /** If [param enabled] is `true`, draws the canvas item specified by the [param item] RID behind its parent. Equivalent to [member CanvasItem.show_behind_parent]. */
        static canvas_item_set_draw_behind_parent(item: RID, enabled: boolean): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the canvas item. */
        static canvas_item_set_interpolated(item: RID, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvas_item_reset_physics_interpolation(item: RID): void
        
        /** Transforms both the current and previous stored transform for a canvas item.  
         *  This allows transforming a canvas item without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvas_item_transform_physics_interpolation(item: RID, transform: Transform2D): void
        
        /** Draws a line on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_line]. */
        static canvas_item_add_line(item: RID, from: Vector2, to: Vector2, color: Color, width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws a 2D polyline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_polyline] and [method CanvasItem.draw_polyline_colors]. */
        static canvas_item_add_polyline(item: RID, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws a 2D multiline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multiline] and [method CanvasItem.draw_multiline_colors]. */
        static canvas_item_add_multiline(item: RID, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        
        /** Draws a rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_rect]. */
        static canvas_item_add_rect(item: RID, rect: Rect2, color: Color, antialiased: boolean = false): void
        
        /** Draws a circle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_circle]. */
        static canvas_item_add_circle(item: RID, pos: Vector2, radius: float64, color: Color, antialiased: boolean = false): void
        
        /** Draws a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect] and [method Texture2D.draw_rect]. */
        static canvas_item_add_texture_rect(item: RID, rect: Rect2, texture: RID, tile: boolean = false, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        
        /** See also [method CanvasItem.draw_msdf_texture_rect_region]. */
        static canvas_item_add_msdf_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outline_size: int64 = 0, px_range: float64 = 1, scale: float64 = 1): void
        
        /** See also [method CanvasItem.draw_lcd_texture_rect_region]. */
        static canvas_item_add_lcd_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color): void
        
        /** Draws the specified region of a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect_region] and [method Texture2D.draw_rect_region]. */
        static canvas_item_add_texture_rect_region(item: RID, rect: Rect2, texture: RID, src_rect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clip_uv: boolean = true): void
        
        /** Draws a nine-patch rectangle on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvas_item_add_nine_patch(item: RID, rect: Rect2, source: Rect2, texture: RID, topleft: Vector2, bottomright: Vector2, x_axis_mode: RenderingServer.NinePatchAxisMode = 0, y_axis_mode: RenderingServer.NinePatchAxisMode = 0, draw_center: boolean = true, modulate: Color = new Color(1, 1, 1, 1)): void
        
        /** Draws a 2D primitive on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_primitive]. */
        static canvas_item_add_primitive(item: RID, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[], texture: RID): void
        
        /** Draws a 2D polygon on the [CanvasItem] pointed to by the [param item] [RID]. If you need more flexibility (such as being able to use bones), use [method canvas_item_add_triangle_array] instead. See also [method CanvasItem.draw_polygon]. */
        static canvas_item_add_polygon(item: RID, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[] = [], texture: RID = new RID()): void
        
        /** Draws a triangle array on the [CanvasItem] pointed to by the [param item] [RID]. This is internally used by [Line2D] and [StyleBoxFlat] for rendering. [method canvas_item_add_triangle_array] is highly flexible, but more complex to use than [method canvas_item_add_polygon].  
         *      
         *  **Note:** [param count] is unused and can be left unspecified.  
         */
        static canvas_item_add_triangle_array(item: RID, indices: PackedInt32Array | int32[], points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[] = [], bones: PackedInt32Array | int32[] = [], weights: PackedFloat32Array | float32[] = [], texture: RID = new RID(), count: int64 = -1): void
        
        /** Draws a mesh created with [method mesh_create] with given [param transform], [param modulate] color, and [param texture]. This is used internally by [MeshInstance2D]. */
        static canvas_item_add_mesh(item: RID, mesh: RID, transform: Transform2D = new Transform2D(), modulate: Color = new Color(1, 1, 1, 1), texture: RID = new RID()): void
        
        /** Draws a 2D [MultiMesh] on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multimesh]. */
        static canvas_item_add_multimesh(item: RID, mesh: RID, texture: RID = new RID()): void
        
        /** Draws particles on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvas_item_add_particles(item: RID, particles: RID, texture: RID): void
        
        /** Sets a [Transform2D] that will be used to transform subsequent canvas item commands. */
        static canvas_item_add_set_transform(item: RID, transform: Transform2D): void
        
        /** If [param ignore] is `true`, ignore clipping on items drawn with this canvas item until this is called again with [param ignore] set to false. */
        static canvas_item_add_clip_ignore(item: RID, ignore: boolean): void
        
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        static canvas_item_add_animation_slice(item: RID, animation_length: float64, slice_begin: float64, slice_end: float64, offset: float64 = 0): void
        
        /** If [param enabled] is `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the [param item] RID, not the canvas item itself. Equivalent to [member CanvasItem.y_sort_enabled]. */
        static canvas_item_set_sort_children_by_y(item: RID, enabled: boolean): void
        
        /** Sets the [CanvasItem]'s Z index, i.e. its draw order (lower indexes are drawn first). */
        static canvas_item_set_z_index(item: RID, z_index: int64): void
        
        /** If this is enabled, the Z index of the parent will be added to the children's Z index. */
        static canvas_item_set_z_as_relative_to_parent(item: RID, enabled: boolean): void
        
        /** Sets the [CanvasItem] to copy a rect to the backbuffer. */
        static canvas_item_set_copy_to_backbuffer(item: RID, enabled: boolean, rect: Rect2): void
        
        /** Clears the [CanvasItem] and removes all commands in it. */
        static canvas_item_clear(item: RID): void
        
        /** Sets the index for the [CanvasItem]. */
        static canvas_item_set_draw_index(item: RID, index: int64): void
        
        /** Sets a new [param material] to the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.material]. */
        static canvas_item_set_material(item: RID, material: RID): void
        
        /** Sets if the [CanvasItem] uses its parent's material. */
        static canvas_item_set_use_parent_material(item: RID, enabled: boolean): void
        
        /** Sets the given [CanvasItem] as visibility notifier. [param area] defines the area of detecting visibility. [param enter_callable] is called when the [CanvasItem] enters the screen, [param exit_callable] is called when the [CanvasItem] exits the screen. If [param enable] is `false`, the item will no longer function as notifier.  
         *  This method can be used to manually mimic [VisibleOnScreenNotifier2D].  
         */
        static canvas_item_set_visibility_notifier(item: RID, enable: boolean, area: Rect2, enter_callable: Callable, exit_callable: Callable): void
        
        /** Sets the canvas group mode used during 2D rendering for the canvas item specified by the [param item] RID. For faster but more limited clipping, use [method canvas_item_set_clip] instead.  
         *      
         *  **Note:** The equivalent node functionality is found in [CanvasGroup] and [member CanvasItem.clip_children].  
         */
        static canvas_item_set_canvas_group_mode(item: RID, mode: RenderingServer.CanvasGroupMode, clear_margin: float64 = 5, fit_empty: boolean = false, fit_margin: float64 = 0, blur_mipmaps: boolean = false): void
        
        /** Returns the bounding rectangle for a canvas item in local space, as calculated by the renderer. This bound is used internally for culling.  
         *  **Warning:** This function is intended for debugging in the editor, and will pass through and return a zero [Rect2] in exported projects.  
         */
        static debug_canvas_item_get_rect(item: RID): Rect2
        
        /** Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Light2D].  
         */
        static canvas_light_create(): RID
        
        /** Attaches the canvas light to the canvas. Removes it from its previous canvas. */
        static canvas_light_attach_to_canvas(light: RID, canvas: RID): void
        
        /** Enables or disables a canvas light. */
        static canvas_light_set_enabled(light: RID, enabled: boolean): void
        
        /** Sets the scale factor of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.texture_scale]. */
        static canvas_light_set_texture_scale(light: RID, scale: float64): void
        
        /** Sets the canvas light's [Transform2D]. */
        static canvas_light_set_transform(light: RID, transform: Transform2D): void
        
        /** Sets the texture to be used by a [PointLight2D]. Equivalent to [member PointLight2D.texture]. */
        static canvas_light_set_texture(light: RID, texture: RID): void
        
        /** Sets the offset of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.offset]. */
        static canvas_light_set_texture_offset(light: RID, offset: Vector2): void
        
        /** Sets the color for a light. */
        static canvas_light_set_color(light: RID, color: Color): void
        
        /** Sets a canvas light's height. */
        static canvas_light_set_height(light: RID, height: float64): void
        
        /** Sets a canvas light's energy. */
        static canvas_light_set_energy(light: RID, energy: float64): void
        
        /** Sets the Z range of objects that will be affected by this light. Equivalent to [member Light2D.range_z_min] and [member Light2D.range_z_max]. */
        static canvas_light_set_z_range(light: RID, min_z: int64, max_z: int64): void
        
        /** The layer range that gets rendered with this light. */
        static canvas_light_set_layer_range(light: RID, min_layer: int64, max_layer: int64): void
        
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_set_item_cull_mask(light: RID, mask: int64): void
        
        /** The binary mask used to determine which layers this canvas light's shadows affects. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_set_item_shadow_cull_mask(light: RID, mask: int64): void
        
        /** The mode of the light, see [enum CanvasLightMode] constants. */
        static canvas_light_set_mode(light: RID, mode: RenderingServer.CanvasLightMode): void
        
        /** Enables or disables the canvas light's shadow. */
        static canvas_light_set_shadow_enabled(light: RID, enabled: boolean): void
        
        /** Sets the canvas light's shadow's filter, see [enum CanvasLightShadowFilter] constants. */
        static canvas_light_set_shadow_filter(light: RID, filter: RenderingServer.CanvasLightShadowFilter): void
        
        /** Sets the color of the canvas light's shadow. */
        static canvas_light_set_shadow_color(light: RID, color: Color): void
        
        /** Smoothens the shadow. The lower, the smoother. */
        static canvas_light_set_shadow_smooth(light: RID, smooth: float64): void
        
        /** Sets the blend mode for the given canvas light. See [enum CanvasLightBlendMode] for options. Equivalent to [member Light2D.blend_mode]. */
        static canvas_light_set_blend_mode(light: RID, mode: RenderingServer.CanvasLightBlendMode): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the canvas light. */
        static canvas_light_set_interpolated(light: RID, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvas_light_reset_physics_interpolation(light: RID): void
        
        /** Transforms both the current and previous stored transform for a canvas light.  
         *  This allows transforming a light without creating a "glitch" in the interpolation, which is is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvas_light_transform_physics_interpolation(light: RID, transform: Transform2D): void
        
        /** Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_occluder_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [LightOccluder2D].  
         */
        static canvas_light_occluder_create(): RID
        
        /** Attaches a light occluder to the canvas. Removes it from its previous canvas. */
        static canvas_light_occluder_attach_to_canvas(occluder: RID, canvas: RID): void
        
        /** Enables or disables light occluder. */
        static canvas_light_occluder_set_enabled(occluder: RID, enabled: boolean): void
        
        /** Sets a light occluder's polygon. */
        static canvas_light_occluder_set_polygon(occluder: RID, polygon: RID): void
        static canvas_light_occluder_set_as_sdf_collision(occluder: RID, enable: boolean): void
        
        /** Sets a light occluder's [Transform2D]. */
        static canvas_light_occluder_set_transform(occluder: RID, transform: Transform2D): void
        
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvas_light_occluder_set_light_mask(occluder: RID, mask: int64): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the light occluder. */
        static canvas_light_occluder_set_interpolated(occluder: RID, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving an occluder to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvas_light_occluder_reset_physics_interpolation(occluder: RID): void
        
        /** Transforms both the current and previous stored transform for a light occluder.  
         *  This allows transforming an occluder without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvas_light_occluder_transform_physics_interpolation(occluder: RID, transform: Transform2D): void
        
        /** Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_occluder_polygon_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [OccluderPolygon2D].  
         */
        static canvas_occluder_polygon_create(): RID
        
        /** Sets the shape of the occluder polygon. */
        static canvas_occluder_polygon_set_shape(occluder_polygon: RID, shape: PackedVector2Array | Vector2[], closed: boolean): void
        
        /** Sets an occluder polygons cull mode. See [enum CanvasOccluderPolygonCullMode] constants. */
        static canvas_occluder_polygon_set_cull_mode(occluder_polygon: RID, mode: RenderingServer.CanvasOccluderPolygonCullMode): void
        
        /** Sets the [member ProjectSettings.rendering/2d/shadow_atlas/size] to use for [Light2D] shadow rendering (in pixels). The value is rounded up to the nearest power of 2. */
        static canvas_set_shadow_texture_size(size: int64): void
        
        /** Creates a new global shader uniform.  
         *      
         *  **Note:** Global shader parameter names are case-sensitive.  
         */
        static global_shader_parameter_add(name: StringName, type: RenderingServer.GlobalShaderParameterType, default_value: any): void
        
        /** Removes the global shader uniform specified by [param name]. */
        static global_shader_parameter_remove(name: StringName): void
        
        /** Returns the list of global shader uniform names.  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static global_shader_parameter_get_list(): GArray
        
        /** Sets the global shader uniform [param name] to [param value]. */
        static global_shader_parameter_set(name: StringName, value: any): void
        
        /** Overrides the global shader uniform [param name] with [param value]. Equivalent to the [ShaderGlobalsOverride] node. */
        static global_shader_parameter_set_override(name: StringName, value: any): void
        
        /** Returns the value of the global shader uniform specified by [param name].  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static global_shader_parameter_get(name: StringName): any
        
        /** Returns the type associated to the global shader uniform specified by [param name].  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static global_shader_parameter_get_type(name: StringName): RenderingServer.GlobalShaderParameterType
        
        /** Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly. */
        static free_rid(rid: RID): void
        
        /** Schedules a callback to the given callable after a frame has been drawn. */
        static request_frame_drawn_callback(callable: Callable): void
        
        /** Returns `true` if changes have been made to the RenderingServer's data. [method force_draw] is usually called if this happens. */
        static has_changed(): boolean
        
        /** Returns a statistic about the rendering engine which can be used for performance profiling. See [enum RenderingServer.RenderingInfo] for a list of values that can be queried. See also [method viewport_get_render_info], which returns information specific to a viewport.  
         *      
         *  **Note:** Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.  
         *      
         *  **Note:** Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method get_rendering_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:  
         *    
         */
        static get_rendering_info(info: RenderingServer.RenderingInfo): int64
        
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         *      
         *  **Note:** On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.  
         */
        static get_video_adapter_name(): string
        
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         */
        static get_video_adapter_vendor(): string
        
        /** Returns the type of the video adapter. Since dedicated graphics cards from a given generation will  *usually*  be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.  
         *      
         *  **Note:** When using the OpenGL backend or when running in headless mode, this function always returns [constant RenderingDevice.DEVICE_TYPE_OTHER].  
         */
        static get_video_adapter_type(): RenderingDevice.DeviceType
        
        /** Returns the version of the graphics video adapter  *currently in use*  (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also [method OS.get_video_adapter_driver_info].  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         */
        static get_video_adapter_api_version(): string
        
        /** Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also [method get_test_cube]. */
        static make_sphere_mesh(latitudes: int64, longitudes: int64, radius: float64): RID
        
        /** Returns the RID of the test cube. This mesh will be created and returned on the first call to [method get_test_cube], then it will be cached for subsequent calls. See also [method make_sphere_mesh]. */
        static get_test_cube(): RID
        
        /** Returns the RID of a 256×256 texture with a testing pattern on it (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_test_texture], then it will be cached for subsequent calls. See also [method get_white_texture].  
         *  Example of getting the test texture and applying it to a [Sprite2D] node:  
         *    
         */
        static get_test_texture(): RID
        
        /** Returns the ID of a 4×4 white texture (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_white_texture], then it will be cached for subsequent calls. See also [method get_test_texture].  
         *  Example of getting the white texture and applying it to a [Sprite2D] node:  
         *    
         */
        static get_white_texture(): RID
        
        /** Sets a boot image. The color defines the background color. If [param scale] is `true`, the image will be scaled to fit the screen size. If [param use_filter] is `true`, the image will be scaled with linear interpolation. If [param use_filter] is `false`, the image will be scaled with nearest-neighbor interpolation. */
        static set_boot_image(image: Image, color: Color, scale: boolean, use_filter: boolean = true): void
        
        /** Returns the default clear color which is used when a specific clear color has not been selected. See also [method set_default_clear_color]. */
        static get_default_clear_color(): Color
        
        /** Sets the default clear color which is used when a specific clear color has not been selected. See also [method get_default_clear_color]. */
        static set_default_clear_color(color: Color): void
        
        /** Returns `true` if the OS supports a certain [param feature]. Features might be `s3tc`, `etc`, and `etc2`. */
        static has_os_feature(feature: string): boolean
        
        /** This method is currently unimplemented and does nothing if called with [param generate] set to `true`. */
        static set_debug_generate_wireframes(generate: boolean): void
        
        /** Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does  *not*  require [method viewport_set_measure_render_time] to be enabled on a viewport to be queried. See also [method viewport_get_measured_render_time_cpu]. */
        static get_frame_setup_time_cpu(): float64
        
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost. */
        static force_sync(): void
        
        /** Forces redrawing of all viewports at once. Must be called from the main thread. */
        static force_draw(swap_buffers: boolean = true, frame_step: float64 = 0): void
        
        /** Returns the global RenderingDevice.  
         *      
         *  **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.  
         */
        static get_rendering_device(): RenderingDevice
        
        /** Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.  
         *      
         *  **Note:** When using the OpenGL backend or when running in headless mode, this function always returns `null`.  
         */
        static create_local_rendering_device(): RenderingDevice
        
        /** Returns `true` if our code is currently executing on the rendering thread. */
        static is_on_render_thread(): boolean
        
        /** As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as [RenderingDevice] and similar RD classes), push a callable via this function so it will be executed on the render thread. */
        static call_on_render_thread(callable: Callable): void
        
        /** If `false`, disables rendering completely, but the engine logic is still being processed. You can call [method force_draw] to draw a frame even with rendering disabled. */
        get render_loop_enabled(): boolean
        set render_loop_enabled(value: boolean)
        
        /** Emitted at the beginning of the frame, before the RenderingServer updates all the Viewports. */
        static readonly frame_pre_draw: Signal0
        
        /** Emitted at the end of the frame, after the RenderingServer has finished updating all the Viewports. */
        static readonly frame_post_draw: Signal0
    }
    // _singleton_class_: PhysicsServer2D
    namespace PhysicsServer2D {
        enum SpaceParameter {
            /** Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_recycle_radius]. */
            SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0,
            
            /** Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_max_separation]. */
            SPACE_PARAM_CONTACT_MAX_SEPARATION = 1,
            
            /** Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_max_allowed_penetration]. */
            SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2,
            
            /** Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/default_contact_bias]. */
            SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3,
            
            /** Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [member ProjectSettings.physics/2d/sleep_threshold_linear]. */
            SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4,
            
            /** Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [member ProjectSettings.physics/2d/sleep_threshold_angular]. */
            SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5,
            
            /** Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time. The default value of this parameter is [member ProjectSettings.physics/2d/time_before_sleep]. */
            SPACE_PARAM_BODY_TIME_TO_SLEEP = 6,
            
            /** Constant to set/get the default solver bias for all physics constraints. A solver bias is a factor controlling how much two objects "rebound", after violating a constraint, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/default_constraint_bias]. */
            SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS = 7,
            
            /** Constant to set/get the number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. The default value of this parameter is [member ProjectSettings.physics/2d/solver/solver_iterations]. */
            SPACE_PARAM_SOLVER_ITERATIONS = 8,
        }
        enum ShapeType {
            /** This is the constant for creating world boundary shapes. A world boundary shape is an  *infinite*  line with an origin point, and a normal. Thus, it can be used for front/behind checks. */
            SHAPE_WORLD_BOUNDARY = 0,
            
            /** This is the constant for creating separation ray shapes. A separation ray is defined by a length and separates itself from what is touching its far endpoint. Useful for character controllers. */
            SHAPE_SEPARATION_RAY = 1,
            
            /** This is the constant for creating segment shapes. A segment shape is a  *finite*  line from a point A to a point B. It can be checked for intersections. */
            SHAPE_SEGMENT = 2,
            
            /** This is the constant for creating circle shapes. A circle shape only has a radius. It can be used for intersections and inside/outside checks. */
            SHAPE_CIRCLE = 3,
            
            /** This is the constant for creating rectangle shapes. A rectangle shape is defined by a width and a height. It can be used for intersections and inside/outside checks. */
            SHAPE_RECTANGLE = 4,
            
            /** This is the constant for creating capsule shapes. A capsule shape is defined by a radius and a length. It can be used for intersections and inside/outside checks. */
            SHAPE_CAPSULE = 5,
            
            /** This is the constant for creating convex polygon shapes. A polygon is defined by a list of points. It can be used for intersections and inside/outside checks. */
            SHAPE_CONVEX_POLYGON = 6,
            
            /** This is the constant for creating concave polygon shapes. A polygon is defined by a list of points. It can be used for intersections checks, but not for inside/outside checks. */
            SHAPE_CONCAVE_POLYGON = 7,
            
            /** This constant is used internally by the engine. Any attempt to create this kind of shape results in an error. */
            SHAPE_CUSTOM = 8,
        }
        enum AreaParameter {
            /** Constant to set/get gravity override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
            AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0,
            
            /** Constant to set/get gravity strength in an area. The default value of this parameter is `9.80665`. */
            AREA_PARAM_GRAVITY = 1,
            
            /** Constant to set/get gravity vector/center in an area. The default value of this parameter is `Vector2(0, -1)`. */
            AREA_PARAM_GRAVITY_VECTOR = 2,
            
            /** Constant to set/get whether the gravity vector of an area is a direction, or a center point. The default value of this parameter is `false`. */
            AREA_PARAM_GRAVITY_IS_POINT = 3,
            
            /** Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [constant AREA_PARAM_GRAVITY]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.  
             *  The above is true only when the unit distance is a positive number. When the unit distance is set to 0.0, the gravity will be constant regardless of distance. The default value of this parameter is `0.0`.  
             */
            AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4,
            
            /** Constant to set/get linear damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
            AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5,
            
            /** Constant to set/get the linear damping factor of an area. The default value of this parameter is `0.1`. */
            AREA_PARAM_LINEAR_DAMP = 6,
            
            /** Constant to set/get angular damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
            AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7,
            
            /** Constant to set/get the angular damping factor of an area. The default value of this parameter is `1.0`. */
            AREA_PARAM_ANGULAR_DAMP = 8,
            
            /** Constant to set/get the priority (order of processing) of an area. The default value of this parameter is `0`. */
            AREA_PARAM_PRIORITY = 9,
        }
        enum AreaSpaceOverrideMode {
            /** This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them. */
            AREA_SPACE_OVERRIDE_DISABLED = 0,
            
            /** This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects. */
            AREA_SPACE_OVERRIDE_COMBINE = 1,
            
            /** This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one. */
            AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2,
            
            /** This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas. */
            AREA_SPACE_OVERRIDE_REPLACE = 3,
            
            /** This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one. */
            AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4,
        }
        enum BodyMode {
            /** Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved. */
            BODY_MODE_STATIC = 0,
            
            /** Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path. */
            BODY_MODE_KINEMATIC = 1,
            
            /** Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied. */
            BODY_MODE_RIGID = 2,
            
            /** Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces. */
            BODY_MODE_RIGID_LINEAR = 3,
        }
        enum BodyParameter {
            /** Constant to set/get a body's bounce factor. The default value of this parameter is `0.0`. */
            BODY_PARAM_BOUNCE = 0,
            
            /** Constant to set/get a body's friction. The default value of this parameter is `1.0`. */
            BODY_PARAM_FRICTION = 1,
            
            /** Constant to set/get a body's mass. The default value of this parameter is `1.0`. If the body's mode is set to [constant BODY_MODE_RIGID], then setting this parameter will have the following additional effects:  
             *  - If the parameter [constant BODY_PARAM_CENTER_OF_MASS] has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.  
             *  - If the parameter [constant BODY_PARAM_INERTIA] is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.  
             */
            BODY_PARAM_MASS = 2,
            
            /** Constant to set/get a body's inertia. The default value of this parameter is `0.0`. If the body's inertia is set to a value `<= 0.0`, then the inertia will be recalculated based on the body's shapes, mass, and center of mass. */
            BODY_PARAM_INERTIA = 3,
            
            /** Constant to set/get a body's center of mass position in the body's local coordinate system. The default value of this parameter is `Vector2(0,0)`. If this parameter is never set explicitly, then it is recalculated based on the body's shapes when setting the parameter [constant BODY_PARAM_MASS] or when calling [method body_set_space]. */
            BODY_PARAM_CENTER_OF_MASS = 4,
            
            /** Constant to set/get a body's gravity multiplier. The default value of this parameter is `1.0`. */
            BODY_PARAM_GRAVITY_SCALE = 5,
            
            /** Constant to set/get a body's linear damping mode. See [enum BodyDampMode] for possible values. The default value of this parameter is [constant BODY_DAMP_MODE_COMBINE]. */
            BODY_PARAM_LINEAR_DAMP_MODE = 6,
            
            /** Constant to set/get a body's angular damping mode. See [enum BodyDampMode] for possible values. The default value of this parameter is [constant BODY_DAMP_MODE_COMBINE]. */
            BODY_PARAM_ANGULAR_DAMP_MODE = 7,
            
            /** Constant to set/get a body's linear damping factor. The default value of this parameter is `0.0`. */
            BODY_PARAM_LINEAR_DAMP = 8,
            
            /** Constant to set/get a body's angular damping factor. The default value of this parameter is `0.0`. */
            BODY_PARAM_ANGULAR_DAMP = 9,
            
            /** Represents the size of the [enum BodyParameter] enum. */
            BODY_PARAM_MAX = 10,
        }
        enum BodyDampMode {
            /** The body's damping value is added to any value set in areas or the default value. */
            BODY_DAMP_MODE_COMBINE = 0,
            
            /** The body's damping value replaces any value set in areas or the default value. */
            BODY_DAMP_MODE_REPLACE = 1,
        }
        enum BodyState {
            /** Constant to set/get the current transform matrix of the body. */
            BODY_STATE_TRANSFORM = 0,
            
            /** Constant to set/get the current linear velocity of the body. */
            BODY_STATE_LINEAR_VELOCITY = 1,
            
            /** Constant to set/get the current angular velocity of the body. */
            BODY_STATE_ANGULAR_VELOCITY = 2,
            
            /** Constant to sleep/wake up a body, or to get whether it is sleeping. */
            BODY_STATE_SLEEPING = 3,
            
            /** Constant to set/get whether the body can sleep. */
            BODY_STATE_CAN_SLEEP = 4,
        }
        enum JointType {
            /** Constant to create pin joints. */
            JOINT_TYPE_PIN = 0,
            
            /** Constant to create groove joints. */
            JOINT_TYPE_GROOVE = 1,
            
            /** Constant to create damped spring joints. */
            JOINT_TYPE_DAMPED_SPRING = 2,
            
            /** Represents the size of the [enum JointType] enum. */
            JOINT_TYPE_MAX = 3,
        }
        enum JointParam {
            /** Constant to set/get how fast the joint pulls the bodies back to satisfy the joint constraint. The lower the value, the more the two bodies can pull on the joint. The default value of this parameter is `0.0`.  
             *      
             *  **Note:** In Godot Physics, this parameter is only used for pin joints and groove joints.  
             */
            JOINT_PARAM_BIAS = 0,
            
            /** Constant to set/get the maximum speed with which the joint can apply corrections. The default value of this parameter is `3.40282e+38`.  
             *      
             *  **Note:** In Godot Physics, this parameter is only used for groove joints.  
             */
            JOINT_PARAM_MAX_BIAS = 1,
            
            /** Constant to set/get the maximum force that the joint can use to act on the two bodies. The default value of this parameter is `3.40282e+38`.  
             *      
             *  **Note:** In Godot Physics, this parameter is only used for groove joints.  
             */
            JOINT_PARAM_MAX_FORCE = 2,
        }
        enum PinJointParam {
            /** Constant to set/get a how much the bond of the pin joint can flex. The default value of this parameter is `0.0`. */
            PIN_JOINT_SOFTNESS = 0,
            
            /** The maximum rotation around the pin. */
            PIN_JOINT_LIMIT_UPPER = 1,
            
            /** The minimum rotation around the pin. */
            PIN_JOINT_LIMIT_LOWER = 2,
            
            /** Target speed for the motor. In radians per second. */
            PIN_JOINT_MOTOR_TARGET_VELOCITY = 3,
        }
        enum PinJointFlag {
            /** If `true`, the pin has a maximum and a minimum rotation. */
            PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED = 0,
            
            /** If `true`, a motor turns the pin. */
            PIN_JOINT_FLAG_MOTOR_ENABLED = 1,
        }
        enum DampedSpringParam {
            /** Sets the resting length of the spring joint. The joint will always try to go to back this length when pulled apart. The default value of this parameter is the distance between the joint's anchor points. */
            DAMPED_SPRING_REST_LENGTH = 0,
            
            /** Sets the stiffness of the spring joint. The joint applies a force equal to the stiffness times the distance from its resting length. The default value of this parameter is `20.0`. */
            DAMPED_SPRING_STIFFNESS = 1,
            
            /** Sets the damping ratio of the spring joint. A value of 0 indicates an undamped spring, while 1 causes the system to reach equilibrium as fast as possible (critical damping). The default value of this parameter is `1.5`. */
            DAMPED_SPRING_DAMPING = 2,
        }
        enum CCDMode {
            /** Disables continuous collision detection. This is the fastest way to detect body collisions, but it can miss small and/or fast-moving objects. */
            CCD_MODE_DISABLED = 0,
            
            /** Enables continuous collision detection by raycasting. It is faster than shapecasting, but less precise. */
            CCD_MODE_CAST_RAY = 1,
            
            /** Enables continuous collision detection by shapecasting. It is the slowest CCD method, and the most precise. */
            CCD_MODE_CAST_SHAPE = 2,
        }
        enum AreaBodyStatus {
            /** The value of the first parameter and area callback function receives, when an object enters one of its shapes. */
            AREA_BODY_ADDED = 0,
            
            /** The value of the first parameter and area callback function receives, when an object exits one of its shapes. */
            AREA_BODY_REMOVED = 1,
        }
        enum ProcessInfo {
            /** Constant to get the number of objects that are not sleeping. */
            INFO_ACTIVE_OBJECTS = 0,
            
            /** Constant to get the number of possible collisions. */
            INFO_COLLISION_PAIRS = 1,
            
            /** Constant to get the number of space regions where a collision could occur. */
            INFO_ISLAND_COUNT = 2,
        }
    }
    /** A server interface for low-level 2D physics access.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.3/classes/class_physicsserver2d.html  
     */
    class PhysicsServer2D extends Object {
        /** Creates a 2D world boundary shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's normal direction and distance properties. */
        static world_boundary_shape_create(): RID
        
        /** Creates a 2D separation ray shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's `length` and `slide_on_slope` properties. */
        static separation_ray_shape_create(): RID
        
        /** Creates a 2D segment shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the segment's start and end points. */
        static segment_shape_create(): RID
        
        /** Creates a 2D circle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the circle's radius. */
        static circle_shape_create(): RID
        
        /** Creates a 2D rectangle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the rectangle's half-extents. */
        static rectangle_shape_create(): RID
        
        /** Creates a 2D capsule shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the capsule's height and radius. */
        static capsule_shape_create(): RID
        
        /** Creates a 2D convex polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the convex polygon's points. */
        static convex_polygon_shape_create(): RID
        
        /** Creates a 2D concave polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the concave polygon's segments. */
        static concave_polygon_shape_create(): RID
        
        /** Sets the shape data that defines the configuration of the shape. The [param data] to be passed depends on the shape's type (see [method shape_get_type]):  
         *  - [constant SHAPE_WORLD_BOUNDARY]: an array of length two containing a [Vector2] `normal` direction and a [float] distance `d`,  
         *  - [constant SHAPE_SEPARATION_RAY]: a dictionary containing the key `length` with a [float] value and the key `slide_on_slope` with a [bool] value,  
         *  - [constant SHAPE_SEGMENT]: a [Rect2] `rect` containing the first point of the segment in `rect.position` and the second point of the segment in `rect.size`,  
         *  - [constant SHAPE_CIRCLE]: a [float] `radius`,  
         *  - [constant SHAPE_RECTANGLE]: a [Vector2] `half_extents`,  
         *  - [constant SHAPE_CAPSULE]: an array of length two (or a [Vector2]) containing a [float] `height` and a [float] `radius`,  
         *  - [constant SHAPE_CONVEX_POLYGON]: either a [PackedVector2Array] of points defining a convex polygon in counterclockwise order (the clockwise outward normal of each segment formed by consecutive points is calculated internally), or a [PackedFloat32Array] of length divisible by four so that every 4-tuple of [float]s contains the coordinates of a point followed by the coordinates of the clockwise outward normal vector to the segment between the current point and the next point,  
         *  - [constant SHAPE_CONCAVE_POLYGON]: a [PackedVector2Array] of length divisible by two (each pair of points forms one segment).  
         *  **Warning:** In the case of [constant SHAPE_CONVEX_POLYGON], this method does not check if the points supplied actually form a convex polygon (unlike the [member CollisionPolygon2D.polygon] property).  
         */
        static shape_set_data(shape: RID, data: any): void
        
        /** Returns the shape's type (see [enum ShapeType]). */
        static shape_get_type(shape: RID): PhysicsServer2D.ShapeType
        
        /** Returns the shape data that defines the configuration of the shape, such as the half-extents of a rectangle or the segments of a concave shape. See [method shape_set_data] for the precise format of this data in each case. */
        static shape_get_data(shape: RID): any
        
        /** Creates a 2D space in the physics server, and returns the [RID] that identifies it. A space contains bodies and areas, and controls the stepping of the physics simulation of the objects in it. */
        static space_create(): RID
        
        /** Activates or deactivates the space. If [param active] is `false`, then the physics server will not do anything with this space in its physics step. */
        static space_set_active(space: RID, active: boolean): void
        
        /** Returns `true` if the space is active. */
        static space_is_active(space: RID): boolean
        
        /** Sets the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static space_set_param(space: RID, param: PhysicsServer2D.SpaceParameter, value: float64): void
        
        /** Returns the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static space_get_param(space: RID, param: PhysicsServer2D.SpaceParameter): float64
        
        /** Returns the state of a space, a [PhysicsDirectSpaceState2D]. This object can be used for collision/intersection queries. */
        static space_get_direct_state(space: RID): PhysicsDirectSpaceState2D
        
        /** Creates a 2D area object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.  
         *  Use [method area_add_shape] to add shapes to it, use [method area_set_transform] to set its transform, and use [method area_set_space] to add the area to a space. If you want the area to be detectable use [method area_set_monitorable].  
         */
        static area_create(): RID
        
        /** Adds the area to the given space, after removing the area from the previously assigned space (if any).  
         *      
         *  **Note:** To remove an area from a space without immediately adding it back elsewhere, use `PhysicsServer2D.area_set_space(area, RID())`.  
         */
        static area_set_space(area: RID, space: RID): void
        
        /** Returns the [RID] of the space assigned to the area. Returns an empty [RID] if no space is assigned. */
        static area_get_space(area: RID): RID
        
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of an area are usually referenced by their index in this array. */
        static area_add_shape(area: RID, shape: RID, transform: Transform2D = new Transform2D(), disabled: boolean = false): void
        
        /** Replaces the area's shape at the given index by another shape, while not affecting the `transform` and `disabled` properties at the same index. */
        static area_set_shape(area: RID, shape_idx: int64, shape: RID): void
        
        /** Sets the local transform matrix of the area's shape with the given index. */
        static area_set_shape_transform(area: RID, shape_idx: int64, transform: Transform2D): void
        
        /** Sets the disabled property of the area's shape with the given index. If [param disabled] is `true`, then the shape will not detect any other shapes entering or exiting it. */
        static area_set_shape_disabled(area: RID, shape_idx: int64, disabled: boolean): void
        
        /** Returns the number of shapes added to the area. */
        static area_get_shape_count(area: RID): int64
        
        /** Returns the [RID] of the shape with the given index in the area's array of shapes. */
        static area_get_shape(area: RID, shape_idx: int64): RID
        
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static area_get_shape_transform(area: RID, shape_idx: int64): Transform2D
        
        /** Removes the shape with the given index from the area's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the area's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static area_remove_shape(area: RID, shape_idx: int64): void
        
        /** Removes all shapes from the area. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static area_clear_shapes(area: RID): void
        
        /** Assigns the area to one or many physics layers, via a bitmask. */
        static area_set_collision_layer(area: RID, layer: int64): void
        
        /** Returns the physics layer or layers the area belongs to, as a bitmask. */
        static area_get_collision_layer(area: RID): int64
        
        /** Sets which physics layers the area will monitor, via a bitmask. */
        static area_set_collision_mask(area: RID, mask: int64): void
        
        /** Returns the physics layer or layers the area can contact with, as a bitmask. */
        static area_get_collision_mask(area: RID): int64
        
        /** Sets the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static area_set_param(area: RID, param: PhysicsServer2D.AreaParameter, value: any): void
        
        /** Sets the transform matrix of the area. */
        static area_set_transform(area: RID, transform: Transform2D): void
        
        /** Returns the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static area_get_param(area: RID, param: PhysicsServer2D.AreaParameter): any
        
        /** Returns the transform matrix of the area. */
        static area_get_transform(area: RID): Transform2D
        
        /** Attaches the `ObjectID` of an [Object] to the area. Use [method Object.get_instance_id] to get the `ObjectID` of a [CollisionObject2D]. */
        static area_attach_object_instance_id(area: RID, id: int64): void
        
        /** Returns the `ObjectID` attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero `ObjectID`. */
        static area_get_object_instance_id(area: RID): int64
        
        /** Attaches the `ObjectID` of a canvas to the area. Use [method Object.get_instance_id] to get the `ObjectID` of a [CanvasLayer]. */
        static area_attach_canvas_instance_id(area: RID, id: int64): void
        
        /** Returns the `ObjectID` of the canvas attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero `ObjectID`. */
        static area_get_canvas_instance_id(area: RID): int64
        
        /** Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,  
         *  2. an [RID] `body_rid`: the [RID] of the body that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the body,  
         *  4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static area_set_monitor_callback(area: RID, callback: Callable): void
        
        /** Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,  
         *  2. an [RID] `area_rid`: the [RID] of the other area that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the other area,  
         *  4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static area_set_area_monitor_callback(area: RID, callback: Callable): void
        
        /** Sets whether the area is monitorable or not. If [param monitorable] is `true`, the area monitoring callback of other areas will be called when this area enters or exits them. */
        static area_set_monitorable(area: RID, monitorable: boolean): void
        
        /** Creates a 2D body object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to [constant BODY_MODE_RIGID].  
         *  Use [method body_add_shape] to add shapes to it, use [method body_set_state] to set its transform, and use [method body_set_space] to add the body to a space.  
         */
        static body_create(): RID
        
        /** Adds the body to the given space, after removing the body from the previously assigned space (if any). If the body's mode is set to [constant BODY_MODE_RIGID], then adding the body to a space will have the following additional effects:  
         *  - If the parameter [constant BODY_PARAM_CENTER_OF_MASS] has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.  
         *  - If the parameter [constant BODY_PARAM_INERTIA] is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.  
         *      
         *  **Note:** To remove a body from a space without immediately adding it back elsewhere, use `PhysicsServer2D.body_set_space(body, RID())`.  
         */
        static body_set_space(body: RID, space: RID): void
        
        /** Returns the [RID] of the space assigned to the body. Returns an empty [RID] if no space is assigned. */
        static body_get_space(body: RID): RID
        
        /** Sets the body's mode. See [enum BodyMode] for the list of available modes. */
        static body_set_mode(body: RID, mode: PhysicsServer2D.BodyMode): void
        
        /** Returns the body's mode (see [enum BodyMode]). */
        static body_get_mode(body: RID): PhysicsServer2D.BodyMode
        
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of a body are usually referenced by their index in this array. */
        static body_add_shape(body: RID, shape: RID, transform: Transform2D = new Transform2D(), disabled: boolean = false): void
        
        /** Replaces the body's shape at the given index by another shape, while not affecting the `transform`, `disabled`, and one-way collision properties at the same index. */
        static body_set_shape(body: RID, shape_idx: int64, shape: RID): void
        
        /** Sets the local transform matrix of the body's shape with the given index. */
        static body_set_shape_transform(body: RID, shape_idx: int64, transform: Transform2D): void
        
        /** Returns the number of shapes added to the body. */
        static body_get_shape_count(body: RID): int64
        
        /** Returns the [RID] of the shape with the given index in the body's array of shapes. */
        static body_get_shape(body: RID, shape_idx: int64): RID
        
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static body_get_shape_transform(body: RID, shape_idx: int64): Transform2D
        
        /** Removes the shape with the given index from the body's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the body's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static body_remove_shape(body: RID, shape_idx: int64): void
        
        /** Removes all shapes from the body. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static body_clear_shapes(body: RID): void
        
        /** Sets the disabled property of the body's shape with the given index. If [param disabled] is `true`, then the shape will be ignored in all collision detection. */
        static body_set_shape_disabled(body: RID, shape_idx: int64, disabled: boolean): void
        
        /** Sets the one-way collision properties of the body's shape with the given index. If [param enable] is `true`, the one-way collision direction given by the shape's local upward axis `body_get_shape_transform(body, shape_idx).y` will be used to ignore collisions with the shape in the opposite direction, and to ensure depenetration of kinematic bodies happens in this direction. */
        static body_set_shape_as_one_way_collision(body: RID, shape_idx: int64, enable: boolean, margin: float64): void
        
        /** Attaches the `ObjectID` of an [Object] to the body. Use [method Object.get_instance_id] to get the `ObjectID` of a [CollisionObject2D]. */
        static body_attach_object_instance_id(body: RID, id: int64): void
        
        /** Returns the `ObjectID` attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero `ObjectID`. */
        static body_get_object_instance_id(body: RID): int64
        
        /** Attaches the `ObjectID` of a canvas to the body. Use [method Object.get_instance_id] to get the `ObjectID` of a [CanvasLayer]. */
        static body_attach_canvas_instance_id(body: RID, id: int64): void
        
        /** Returns the `ObjectID` of the canvas attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero `ObjectID`. */
        static body_get_canvas_instance_id(body: RID): int64
        
        /** Sets the continuous collision detection mode using one of the [enum CCDMode] constants.  
         *  Continuous collision detection tries to predict where a moving body would collide in between physics updates, instead of moving it and correcting its movement if it collided.  
         */
        static body_set_continuous_collision_detection_mode(body: RID, mode: PhysicsServer2D.CCDMode): void
        
        /** Returns the body's continuous collision detection mode (see [enum CCDMode]). */
        static body_get_continuous_collision_detection_mode(body: RID): PhysicsServer2D.CCDMode
        
        /** Sets the physics layer or layers the body belongs to, via a bitmask. */
        static body_set_collision_layer(body: RID, layer: int64): void
        
        /** Returns the physics layer or layers the body belongs to, as a bitmask. */
        static body_get_collision_layer(body: RID): int64
        
        /** Sets the physics layer or layers the body can collide with, via a bitmask. */
        static body_set_collision_mask(body: RID, mask: int64): void
        
        /** Returns the physics layer or layers the body can collide with, as a bitmask. */
        static body_get_collision_mask(body: RID): int64
        
        /** Sets the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static body_set_collision_priority(body: RID, priority: float64): void
        
        /** Returns the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static body_get_collision_priority(body: RID): float64
        
        /** Sets the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static body_set_param(body: RID, param: PhysicsServer2D.BodyParameter, value: any): void
        
        /** Returns the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static body_get_param(body: RID, param: PhysicsServer2D.BodyParameter): any
        
        /** Restores the default inertia and center of mass of the body based on its shapes. This undoes any custom values previously set using [method body_set_param]. */
        static body_reset_mass_properties(body: RID): void
        
        /** Sets the value of a body's state. See [enum BodyState] for the list of available states.  
         *      
         *  **Note:** The state change doesn't take effect immediately. The state will change on the next physics frame.  
         */
        static body_set_state(body: RID, state: PhysicsServer2D.BodyState, value: any): void
        
        /** Returns the value of the given state of the body. See [enum BodyState] for the list of available states. */
        static body_get_state(body: RID, state: PhysicsServer2D.BodyState): any
        
        /** Applies a directional impulse to the body, at the body's center of mass. The impulse does not affect rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method body_apply_impulse] at the body's center of mass.  
         */
        static body_apply_central_impulse(body: RID, impulse: Vector2): void
        
        /** Applies a rotational impulse to the body. The impulse does not affect position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         */
        static body_apply_torque_impulse(body: RID, impulse: float64): void
        
        /** Applies a positioned impulse to the body. The impulse can affect rotation if [param position] is different from the body's center of mass.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static body_apply_impulse(body: RID, impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a directional force to the body, at the body's center of mass. The force does not affect rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method body_apply_force] at the body's center of mass.  
         */
        static body_apply_central_force(body: RID, force: Vector2): void
        
        /** Applies a positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static body_apply_force(body: RID, force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Applies a rotational force to the body. The force does not affect position. A force is time dependent and meant to be applied every physics update. */
        static body_apply_torque(body: RID, torque: float64): void
        
        /** Adds a constant directional force to the body. The force does not affect rotation. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.  
         *  This is equivalent to using [method body_add_constant_force] at the body's center of mass.  
         */
        static body_add_constant_central_force(body: RID, force: Vector2): void
        
        /** Adds a constant positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static body_add_constant_force(body: RID, force: Vector2, position: Vector2 = Vector2.ZERO): void
        
        /** Adds a constant rotational force to the body. The force does not affect position. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_torque(body, 0)`. */
        static body_add_constant_torque(body: RID, torque: float64): void
        
        /** Sets the body's total constant positional force applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static body_set_constant_force(body: RID, force: Vector2): void
        
        /** Returns the body's total constant positional force applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static body_get_constant_force(body: RID): Vector2
        
        /** Sets the body's total constant rotational force applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static body_set_constant_torque(body: RID, torque: float64): void
        
        /** Returns the body's total constant rotational force applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static body_get_constant_torque(body: RID): float64
        
        /** Modifies the body's linear velocity so that its projection to the axis `axis_velocity.normalized()` is exactly `axis_velocity.length()`. This is useful for jumping behavior. */
        static body_set_axis_velocity(body: RID, axis_velocity: Vector2): void
        
        /** Adds [param excepted_body] to the body's list of collision exceptions, so that collisions with it are ignored. */
        static body_add_collision_exception(body: RID, excepted_body: RID): void
        
        /** Removes [param excepted_body] from the body's list of collision exceptions, so that collisions with it are no longer ignored. */
        static body_remove_collision_exception(body: RID, excepted_body: RID): void
        
        /** Sets the maximum number of contacts that the body can report. If [param amount] is greater than zero, then the body will keep track of at most this many contacts with other bodies. */
        static body_set_max_contacts_reported(body: RID, amount: int64): void
        
        /** Returns the maximum number of contacts that the body can report. See [method body_set_max_contacts_reported]. */
        static body_get_max_contacts_reported(body: RID): int64
        
        /** Sets whether the body omits the standard force integration. If [param enable] is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, [method body_set_force_integration_callback] can be used to manually update the linear and angular velocity instead.  
         *  This method is called when the property [member RigidBody2D.custom_integrator] is set.  
         */
        static body_set_omit_force_integration(body: RID, enable: boolean): void
        
        /** Returns `true` if the body is omitting the standard force integration. See [method body_set_omit_force_integration]. */
        static body_is_omitting_force_integration(body: RID): boolean
        
        /** Sets the body's state synchronization callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the callback.  
         *  The function [param callable] will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.  
         *  The function [param callable] must take the following parameters:  
         *  1. `state`: a [PhysicsDirectBodyState2D], used to retrieve the body's state.  
         */
        static body_set_state_sync_callback(body: RID, callable: Callable): void
        
        /** Sets the body's custom force integration callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback.  
         *  The function [param callable] will be called every physics tick, before the standard force integration (see [method body_set_omit_force_integration]). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.  
         *  If [param userdata] is not `null`, the function [param callable] must take the following two parameters:  
         *  1. `state`: a [PhysicsDirectBodyState2D] used to retrieve and modify the body's state,  
         *  2. [code skip-lint]userdata`: a [Variant]; its value will be the [param userdata] passed into this method.  
         *  If [param userdata] is `null`, then [param callable] must take only the `state` parameter.  
         */
        static body_set_force_integration_callback(body: RID, callable: Callable, userdata: any = <any> {}): void
        
        /** Returns `true` if a collision would result from moving the body along a motion vector from a given point in space. See [PhysicsTestMotionParameters2D] for the available motion parameters. Optionally a [PhysicsTestMotionResult2D] object can be passed, which will be used to store the information about the resulting collision. */
        static body_test_motion(body: RID, parameters: PhysicsTestMotionParameters2D, result: PhysicsTestMotionResult2D = undefined): boolean
        
        /** Returns the [PhysicsDirectBodyState2D] of the body. Returns `null` if the body is destroyed or not assigned to a space. */
        static body_get_direct_state(body: RID): PhysicsDirectBodyState2D
        
        /** Creates a 2D joint in the physics server, and returns the [RID] that identifies it. To set the joint type, use [method joint_make_damped_spring], [method joint_make_groove] or [method joint_make_pin]. Use [method joint_set_param] to set generic joint parameters. */
        static joint_create(): RID
        
        /** Destroys the joint with the given [RID], creates a new uninitialized joint, and makes the [RID] refer to this new joint. */
        static joint_clear(joint: RID): void
        
        /** Sets the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static joint_set_param(joint: RID, param: PhysicsServer2D.JointParam, value: float64): void
        
        /** Returns the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static joint_get_param(joint: RID, param: PhysicsServer2D.JointParam): float64
        
        /** Sets whether the bodies attached to the [Joint2D] will collide with each other. */
        static joint_disable_collisions_between_bodies(joint: RID, disable: boolean): void
        
        /** Returns whether the bodies attached to the [Joint2D] will collide with each other. */
        static joint_is_disabled_collisions_between_bodies(joint: RID): boolean
        
        /** Makes the joint a pin joint. If [param body_b] is an empty [RID], then [param body_a] is pinned to the point [param anchor] (given in global coordinates); otherwise, [param body_a] is pinned to [param body_b] at the point [param anchor] (given in global coordinates). To set the parameters which are specific to the pin joint, see [method pin_joint_set_param]. */
        static joint_make_pin(joint: RID, anchor: Vector2, body_a: RID, body_b: RID = new RID()): void
        
        /** Makes the joint a groove joint. */
        static joint_make_groove(joint: RID, groove1_a: Vector2, groove2_a: Vector2, anchor_b: Vector2, body_a: RID = new RID(), body_b: RID = new RID()): void
        
        /** Makes the joint a damped spring joint, attached at the point [param anchor_a] (given in global coordinates) on the body [param body_a] and at the point [param anchor_b] (given in global coordinates) on the body [param body_b]. To set the parameters which are specific to the damped spring, see [method damped_spring_joint_set_param]. */
        static joint_make_damped_spring(joint: RID, anchor_a: Vector2, anchor_b: Vector2, body_a: RID, body_b: RID = new RID()): void
        
        /** Sets a pin joint flag (see [enum PinJointFlag] constants). */
        static pin_joint_set_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        
        /** Gets a pin joint flag (see [enum PinJointFlag] constants). */
        static pin_joint_get_flag(joint: RID, flag: PhysicsServer2D.PinJointFlag): boolean
        
        /** Sets a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pin_joint_set_param(joint: RID, param: PhysicsServer2D.PinJointParam, value: float64): void
        
        /** Returns the value of a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pin_joint_get_param(joint: RID, param: PhysicsServer2D.PinJointParam): float64
        
        /** Sets the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static damped_spring_joint_set_param(joint: RID, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        
        /** Returns the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static damped_spring_joint_get_param(joint: RID, param: PhysicsServer2D.DampedSpringParam): float64
        
        /** Returns the joint's type (see [enum JointType]). */
        static joint_get_type(joint: RID): PhysicsServer2D.JointType
        
        /** Destroys any of the objects created by PhysicsServer2D. If the [RID] passed is not one of the objects that can be created by PhysicsServer2D, an error will be printed to the console. */
        static free_rid(rid: RID): void
        
        /** Activates or deactivates the 2D physics server. If [param active] is `false`, then the physics server will not do anything in its physics step. */
        static set_active(active: boolean): void
        
        /** Returns information about the current state of the 2D physics engine. See [enum ProcessInfo] for the list of available states. */
        static get_process_info(process_info: PhysicsServer2D.ProcessInfo): int64
    }
}
